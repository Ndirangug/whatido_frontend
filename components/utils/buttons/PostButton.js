import { PostButtonContainer } from '../../../styles/create.styles';

function PostButton({ children, color }) {
  return <PostButtonContainer color={color}>{children}</PostButtonContainer>;
}

export default PostButton;
