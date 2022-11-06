import axios from 'axios';
import { useCookies } from 'react-cookie';
import useSWR, { mutate } from 'swr';
import { API_URL } from '../../../constants/api';
import XxsAvatar from '../../utils/avatars/XxsAvatar';
import { TextSm, TextxS } from '../../utils/typography/Typography';

function Comment({ comment, mediaId }) {
  const cookieUser = useCookies()[0]?.user;
  const commentUserUserUrl = `${API_URL}/getExpertDetail/${comment?.userSlug}`;
  const commentUrl = `${API_URL}/media/page/comment/${mediaId}?page=${0}`;
  const { data: commenttUserRequest } = useSWR(commentUserUserUrl);
  const commentUser = commenttUserRequest?.data;
  const [{ token }] = useCookies(['token']);

  const myComment = cookieUser?.slug === comment?.userSlug;

  const handleDeleteComment = async () => {
    const deletedMediaComment = await axios.delete(
      `${API_URL}/media/comment/${comment?._id}`,
      {
        headers: { Authorization: token },
      }
    );

    mutate(commentUrl, (comment) => {
      const newComment = [...comment, deletedMediaComment];
      return newComment;
    });
  };

  return (
    <div className="flex-container">
      <div className="flex">
        <XxsAvatar src={commentUser?.imageUrl?.cdnUrl} />
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {commentUser && (
              <TextSm>
                {commentUser?.profile?.firstName +
                  '  ' +
                  commentUser?.profile?.lastName}{' '}
              </TextSm>
            )}
            <div className="ellipse" />
            <div className="category">
              {commentUser && (
                <TextSm>{commentUser?.expertCategories[0]}</TextSm>
              )}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextSm className="comment">{comment?.text}</TextSm>
          </div>
        </div>
      </div>
      {myComment && (
        <div className="option-text" onClick={handleDeleteComment}>
          <TextxS>delete</TextxS>
        </div>
      )}
    </div>
  );
}

export default Comment;
