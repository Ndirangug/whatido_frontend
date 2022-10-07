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
import { ShareText } from '../utils/typography/Typography';

function DragDrop() {
  const dispatch = useDispatch();

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    if (file.size > 1000000000) {
      console.log('upload maximum file size 1gb');
    } else {
      dispatch(setIsFetchingMediaInfo(true));
      const videoData = new FormData();
      videoData.append('video', file);
      videoData.append('start_offset', 1);
      const res = await getMediaProcessed(videoData, 'thumbnail');
      if (!res.ok) {
        dispatch(setIsFetchingMediaInfo(false));
        dispatch(setMediaError('creating thumbnail failed'));
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
      <ShareText>select video file</ShareText>
      <SelectButtonContainer>select file</SelectButtonContainer>
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
