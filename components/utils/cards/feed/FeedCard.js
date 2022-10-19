import Image from 'next/image';
import { FeedCardContainer } from '../../../../styles/profile.styles';

function FeedCard({ media }) {
  return (
    <FeedCardContainer>
      <Image
        src={media?.thumbnail?.[0]?.cdnUrl}
        alt="Logo"
        height={100}
        width={100}
        layout="responsive"
      />
    </FeedCardContainer>
  );
}

export default FeedCard;
