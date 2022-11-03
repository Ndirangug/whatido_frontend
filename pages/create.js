import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ActionButton from '../components/create/ActionButton';
import DragDrop from '../components/create/DragDrop';
import Preview from '../components/create/Preview';
import UploadInputPreview from '../components/create/UploadInputPreview';
import {
  CreateHeadingText,
  CreateParaText,
} from '../components/utils/typography/Typography';
import RequireAuth from '../hooks/RequireAuth';
import {
  CreatePageContainer,
  UploadMainContainer,
} from '../styles/create.styles';

function Create() {
  const previewComponent = useSelector((state) => state.media.previewComponent);
  const error = useSelector((state) => state.media.error);
  const [screenShots, setscreenShots] = useState([]);
  const [selectedSS, setSelectedSS] = useState('');

  return (
    <CreatePageContainer>
      <div className="create-content">
        <CreateHeadingText>Upload video</CreateHeadingText>
        <CreateParaText>Post a video to your account</CreateParaText>
      </div>
      <UploadMainContainer>
        <div className="drapAndDropContainer">
          {previewComponent === 'DROPZONE' && (
            <DragDrop
              setScreenShots={setscreenShots}
              setSelectedSS={setSelectedSS}
            />
          )}
          {previewComponent === 'PREVIEW' && <Preview />}
        </div>

        <div className="inputContainer">
          <UploadInputPreview
            screenShots={screenShots}
            imgClicked={selectedSS}
            setimgClicked={setSelectedSS}
          />
          {error && <Alert severity="error">{error} </Alert>}
          <ActionButton />
        </div>
      </UploadMainContainer>
    </CreatePageContainer>
  );
}

export default RequireAuth(Create);
