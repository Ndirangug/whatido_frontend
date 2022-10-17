import { useDispatch } from 'react-redux';
import { getMediaProcessed } from '../../store/actions/media_actions';
import {
  setIsFetchingMediaInfo,
  setMediaError,
  setMediaPreview,
  setPreUploadFile,
} from '../../store/reducers/media_reducer';
import { DragDropContainer } from '../../styles/create.styles';
import { SelectButtonContainer } from '../../styles/utils.styles';
import UploadIcon from '../utils/icons/UploadIcon';
import {
  ShareHeadingText,
  ShareParaText,
} from '../utils/typography/Typography';

function DragDrop() {
  const dispatch = useDispatch();

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    if (file.size > 2500000000) {
      dispatch(setMediaError('upload maximum file size 250mb'));
      return;
    } else {
      dispatch(setIsFetchingMediaInfo(true));
      const videoData = new FormData();
      videoData.append('video', file);
      videoData.append('start_offset', 1);
      const res = await getMediaProcessed(videoData, 'thumbnail');
      if (!res.ok) {
        dispatch(setIsFetchingMediaInfo(false));
        dispatch(setMediaError('failed to get media metadata'));
        return;
      }

      const thumbnailBlob = await res.blob();
      let thumbnailFile = new File([thumbnailBlob], 'video_thumbnail', {
        type: 'image/png',
      });
      dispatch(setIsFetchingMediaInfo(false));
      dispatch(setPreUploadFile({ file: file, thumbnail: thumbnailFile }));
      dispatch(setMediaError(null));
      dispatch(setMediaPreview('PREVIEW'));
    }
  };

  return (
    <DragDropContainer>
      <UploadIcon />
      <div className="margin-bottom">
        <ShareHeadingText>Select video to upload</ShareHeadingText>
        <ShareParaText>Or drag and drop a file</ShareParaText>
      </div>
      <ShareParaText>MP4 or WebM</ShareParaText>
      <ShareParaText>720x1280 resolution or higher</ShareParaText>
      <ShareParaText>Up to 5 minutes</ShareParaText>
      <ShareParaText>Less than 2 GB</ShareParaText>
      <SelectButtonContainer>Select file</SelectButtonContainer>
      <input
        type="file"
        className="drop-input"
        accept="video/*"
        onChange={(e) => onFileChange(e)}
      />
    </DragDropContainer>
  );
}

export default DragDrop;
