import { useId } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import useSWR, { mutate } from 'swr';
import { API_URL } from '../../constants/api';
import { postNewMedia } from '../../store/actions/media_actions';
import {
  setCaption,
  setEmpty,
  setIsFetchingMediaInfo,
  setMediaError,
  setMediaPreview,
  setMediaUploading,
  setPreUploadFile,
} from '../../store/reducers/media_reducer';
import { CreateButtonContainer } from '../../styles/create.styles';
import PostButton from '../utils/buttons/PostButton';

function ActionButton() {
  const dispatch = useDispatch();
  // const mediaFile = useSelector((state) => state.media.preUploadFile);
  const mediaFile = useSelector((state) => state.media.videoUrl);
  const thumbnail = useSelector((state) => state.media.selectedSS);
  const imageUrls = useSelector((state) => state.media.imageUrls);
  const caption = useSelector((state) => state.media.caption);
  const previewComponent = useSelector((state) => state.media.previewComponent);
  const id = useId();
  const user = useSelector((state) => state.auth.currentUser);
  const { data } = useSWR(`${API_URL}/getExpertsCategoryList`);
  const [{ token }] = useCookies(['token']);
  const mediaUrl = `${API_URL}/media/all/${user?.slug}`;

  const getExpertCommunity = () =>
    data?.find((item) =>
      item.subcategories.find(
        (subitem) => subitem.slug === user?.expertCategories[0]
      )
    );

  const uploadNewMedia = async (data) => {
    try {
      const res = await toast.promise(postNewMedia(data, token), {
        pending: 'uploading media in background',
        success: 'uploaded media successfully',
        error: 'error in media upload try again!',
      });

      mutate(mediaUrl, res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const discardMedia = () => {
    dispatch(setMediaUploading(false));
    dispatch(setPreUploadFile(false));
    dispatch(setIsFetchingMediaInfo(false));
    dispatch(setMediaPreview('DROPZONE'));
    dispatch(setCaption(''));
    dispatch(setMediaError(null));
    dispatch(setPreUploadFile({}));
    dispatch(setEmpty());
  };

  const uploadMedia = () => {
    const mediaData = {
      mediaId: id,
      mediaType: 'video',
      media: mediaFile,
      screenshots: imageUrls,
      thumbnail,
      text: caption,
      userSlug: user?.slug,
      community: getExpertCommunity()?.slug,
      tags: [user?.expertCategories[0]],
      youtubeLink: null,
    };

    dispatch(setMediaUploading(true));
    uploadNewMedia(mediaData);
    discardMedia();
  };

  return (
    <CreateButtonContainer>
      <PostButton
        textColor={'var(--main-black)'}
        color={'var(--main-background)'}
        event={discardMedia}
      >
        Discard
      </PostButton>
      <PostButton
        textColor={'#fff'}
        color={'var(--main-black)'}
        event={uploadMedia}
      >
        Post
      </PostButton>
    </CreateButtonContainer>
  );
}

export default ActionButton;
