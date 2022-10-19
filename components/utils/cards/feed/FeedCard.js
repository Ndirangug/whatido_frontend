import Image from 'next/image';
import { Logo } from '../../../../constants/api';
import { FeedCardContainer } from '../../../../styles/profile.styles';

function FeedCard() {
  return (
    <FeedCardContainer>
      <Image
        src={Logo}
        alt="Logo"
        height={100}
        width={100}
        layout="responsive"
      />
    </FeedCardContainer>
  );
}

export default FeedCard;
