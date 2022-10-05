import { CreateButtonContainer } from '../../styles/create.styles';
import PostButton from '../utils/buttons/PostButton';

function ActionButton() {
  return (
    <CreateButtonContainer>
      <PostButton color={'var(--gray-variant-i)'}>discard</PostButton>
      <PostButton color={'var(--main-black)'}>post</PostButton>
    </CreateButtonContainer>
  );
}

export default ActionButton;
