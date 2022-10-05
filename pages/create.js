import Stack from '@mui/material/Stack';
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
      <Stack direction="column" spacing={2}>
        <Stack direction="column" spacing={2}>
          <CreateText>share what you do</CreateText>
          <DragDrop />
        </Stack>
        <Stack direction="column" spacing={1}>
          <UploadInputPreview />
          <TagUser />
          <TagLocation />
          <SelectFeatures />
        </Stack>

        <ActionButton />
      </Stack>
    </CreatePageContainer>
  );
}

export default create;
