import Stack from '@mui/material/Stack';
import DragDrop from '../components/create/DragDrop';
import { CreateText } from '../components/utils/typography/Typography';
import { CreatePageContainer } from '../styles/create.styles';

function create() {
  return (
    <CreatePageContainer>
      <Stack direction="column" spacing={2}>
        <CreateText>share what you do</CreateText>
        <DragDrop />
      </Stack>
    </CreatePageContainer>
  );
}

export default create;
