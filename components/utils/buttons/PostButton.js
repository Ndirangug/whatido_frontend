import { PostButtonContainer } from '../../../styles/create.styles';

function PostButton({ children, color, event }) {
  return (
    <PostButtonContainer onClick={event} color={color}>
      {children}
    </PostButtonContainer>
  );
}

export default PostButton;
