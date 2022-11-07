import Image from 'next/legacy/image';
import { FeedCardContainer } from '../../../../styles/profile.styles';

function FeedCard({ media }) {
  return (
    <FeedCardContainer>
      <Image
        src={media?.thumbnail?.[0]?.cdnUrl}
        alt="Logo"
        width={300}
        height={300}
        layout="responsive"
        objectFit="cover"
      />
    </FeedCardContainer>
  );
}

export default FeedCard;
