import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setCaption } from '../../store/reducers/media_reducer';
import { UploadInputPreviewContainer } from '../../styles/create.styles';

function UploadInputPreview() {
  const mediaFile = useSelector((state) => state.media.preUploadFile);
  const caption = useSelector((state) => state.media.caption);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setCaption(e.target.value));
  };
  
  return (
    <UploadInputPreviewContainer>
      <div className="preview-conatiner">
        {mediaFile?.thumbnail && (
          <Image
            src={window.URL.createObjectURL(mediaFile?.thumbnail)}
            alt="preview"
            className="preview-image"
            objectFit="cover"
            height={120}
            width={100}
          />
        )}
      </div>
      <textarea
        type="text"
        className="input"
        placeholder="write a caption"
        value={caption}
        onChange={(e) => handleChange(e)}
      />
    </UploadInputPreviewContainer>
  );
}

export default UploadInputPreview;
