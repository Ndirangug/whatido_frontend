import Stack from '@mui/material/Stack';
import DragDrop from '../components/create/DragDrop';
import UploadInputPreview from '../components/create/UploadInputPreview';
import { CreateText } from '../components/utils/typography/Typography';
import { CreatePageContainer } from '../styles/create.styles';

function create() {
  return (
    <CreatePageContainer>
      <Stack direction="column" spacing={4}>
        <Stack direction="column" spacing={2}>
          <CreateText>share what you do</CreateText>
          <DragDrop />
        </Stack>
        <UploadInputPreview />
      </Stack>
    </CreatePageContainer>
  );
}

export default create;
