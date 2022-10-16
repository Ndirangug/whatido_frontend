import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import ActionButton from '../components/create/ActionButton';
import DragDrop from '../components/create/DragDrop';
import Preview from '../components/create/Preview';
import UploadInputPreview from '../components/create/UploadInputPreview';
import { CreateText } from '../components/utils/typography/Typography';
import RequireAuth from '../hooks/RequireAuth';
import { CreatePageContainer } from '../styles/create.styles';

function Create() {
  const previewComponent = useSelector((state) => state.media.previewComponent);
  const error = useSelector((state) => state.media.error);

  return (
    <CreatePageContainer>
      <div className="create-content">
        <CreateText>share what you do</CreateText>
        {previewComponent === 'DROPZONE' && <DragDrop />}
        {previewComponent === 'PREVIEW' && <Preview />}
      </div>

      <div className="create-content">
        <UploadInputPreview />
        {/* <TagUser />
        <TagLocation />
        <SelectFeatures /> */}
        {error && <Alert severity="error">{error} </Alert>}
      </div>
      <ActionButton />
    </CreatePageContainer>
  );
}

export default RequireAuth(Create);
