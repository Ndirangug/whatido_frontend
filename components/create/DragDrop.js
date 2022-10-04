import { DragDropContainer } from '../../styles/create.styles';
import { SelectButtonContainer } from '../../styles/utils.styles';
import UploadIcon from '../utils/icons/UploadIcon';
import { ShareText } from '../utils/typography/Typography';

function DragDrop() {
  return (
    <DragDropContainer>
      <UploadIcon />
      <ShareText>select video file</ShareText>
      <SelectButtonContainer>select file</SelectButtonContainer>
    </DragDropContainer>
  );
}

export default DragDrop;
