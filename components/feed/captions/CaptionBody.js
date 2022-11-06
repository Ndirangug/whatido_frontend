import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import { CaptionBodyContainer } from '../../../styles/feed.styles';
import Comment from './Comment';

function CaptionBody({ sendingMediaComment, viewedMedia }) {
  const commentUrl = `${API_URL}/media/page/comment/${
    viewedMedia?._id
  }?page=${0}`;
  const { data: mediaComments } = useSWR(commentUrl);

  return (
    <CaptionBodyContainer>
      <div className="comment-container">
        {sendingMediaComment?.map((comment) => (
          <Comment
            key={viewedMedia?._id}
            comment={comment}
            mediaId={viewedMedia?._id}
          />
        ))}

        {mediaComments?.map((comment) => (
          <Comment
            key={comment?.userSlug}
            comment={comment}
            mediaId={viewedMedia?._id}
          />
        ))}
      </div>
    </CaptionBodyContainer>
  );
}

export default CaptionBody;
