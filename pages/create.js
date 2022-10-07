import { useSelector } from 'react-redux';
import ActionButton from '../components/create/ActionButton';
import DragDrop from '../components/create/DragDrop';
import Preview from '../components/create/Preview';
import SelectFeatures from '../components/create/SelectFeatures';
import TagLocation from '../components/create/TagLocation';
import TagUser from '../components/create/TagUser';
import UploadInputPreview from '../components/create/UploadInputPreview';
import { CreateText } from '../components/utils/typography/Typography';
import { CreatePageContainer } from '../styles/create.styles';

function Create() {
  const previewComponent = useSelector((state) => state.media.previewComponent);

  return (
    <CreatePageContainer>
      <div className="create-content">
        <CreateText>share what you do</CreateText>
        {previewComponent === 'DROPZONE' && <DragDrop />}
        {previewComponent === 'PREVIEW' && <Preview />}
      </div>

      <div className="create-content">
        <UploadInputPreview />
        <TagUser />
        <TagLocation />
        <SelectFeatures />
      </div>
      <ActionButton />
    </CreatePageContainer>
  );
}

export default Create;
