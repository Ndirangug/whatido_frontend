import { UploadInputPreviewContainer } from '../../styles/create.styles';

function UploadInputPreview() {
  return (
    <UploadInputPreviewContainer>
      <div className="preview-conatiner"></div>
      <textarea type="text" className="input" placeholder="write a caption" />
    </UploadInputPreviewContainer>
  );
}

export default UploadInputPreview;
