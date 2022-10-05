import ActionButton from '../components/create/ActionButton';
import DragDrop from '../components/create/DragDrop';
import SelectFeatures from '../components/create/SelectFeatures';
import TagLocation from '../components/create/TagLocation';
import TagUser from '../components/create/TagUser';
import UploadInputPreview from '../components/create/UploadInputPreview';
import { CreateText } from '../components/utils/typography/Typography';
import { CreatePageContainer } from '../styles/create.styles';

function create() {
  return (
    <CreatePageContainer>
      <div className="create-content">
        <CreateText>share what you do</CreateText>
        <DragDrop />
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

export default create;
