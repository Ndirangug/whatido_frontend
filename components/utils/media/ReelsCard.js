import Image from 'next/image';
import { ReelsCardContainer } from '../../../styles/utils.styles';

function ReelsCard() {
  return (
    <ReelsCardContainer>
      <Image
        src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1659966936416__ce3cc7ae-5968-4ba2-b326-e895ebad192b__whatido.jpeg"
        alt="media"
        layout="fill"
        objectFit="cover"
        className="content"
      />
    </ReelsCardContainer>
  );
}

export default ReelsCard;
