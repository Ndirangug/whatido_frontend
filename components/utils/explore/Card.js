import Image from 'next/image';
import { CardContainer } from '../../../styles/explore.styles';
import PlusIcon from '../icons/PlusIcon';
import { BaseAvatar } from '../micro/Avatar';
import { TextXS } from '../micro/Typography';

const Card = () => {
  return (
    <CardContainer>
      <div className="img-wrapper">
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/profile/1655931996055__ab2869f2-801b-4a6f-96f1-f9ffd7b88574__IMG_20220623_000620.jpg"
          alt="explore"
          width="80px"
          height="70px"
          className="img"
        />

        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1654782230047__9dab90b0-3c0f-42bc-af77-6713ee220241__tesla.jpg"
          alt="explore"
          width="80px"
          height="70px"
          className="img"
        />
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
          alt="explore"
          width="80px"
          height="70px"
          className="img"
        />
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1654782230047__9dab90b0-3c0f-42bc-af77-6713ee220241__tesla.jpg"
          alt="explore"
          width="80px"
          height="70px"
          className="img"
        />
      </div>
      <div className="large-img-wrapper">
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/profile/1655931996055__ab2869f2-801b-4a6f-96f1-f9ffd7b88574__IMG_20220623_000620.jpg"
          alt="explore"
          width="140px"
          height="110px"
          className="img"
        />

        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1654782230047__9dab90b0-3c0f-42bc-af77-6713ee220241__tesla.jpg"
          alt="explore"
          width="140px"
          height="110px"
          className="img"
        />
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
          alt="explore"
          width="140px"
          height="110px"
          className="img"
        />
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1654782230047__9dab90b0-3c0f-42bc-af77-6713ee220241__tesla.jpg"
          alt="explore"
          width="140px"
          height="110px"
          className="img"
        />
      </div>

      <div className="details-container">
        <div className="details-wrapper">
          <TextXS className="category-title">Academic Tutoring</TextXS>
          <div className="experts-wrapper">
            <TextXS className="num-of-experts">25 experts</TextXS>
            <div className="experts-avatars">
              <BaseAvatar
                alt="what i do"
                sx={{ width: '19px', height: '19px' }}
                src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/profile/1655931996055__ab2869f2-801b-4a6f-96f1-f9ffd7b88574__IMG_20220623_000620.jpg"
                className="avatar"
              />
              <BaseAvatar
                alt="what i do"
                sx={{ width: '19px', height: '19px' }}
                src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
                className="avatar"
              />
              <BaseAvatar
                alt="what i do"
                sx={{ width: '19px', height: '19px' }}
                src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg"
                className="avatar"
              />
              <BaseAvatar
                alt="what i do"
                sx={{ width: '19px', height: '19px' }}
                src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/profile/1655931996055__ab2869f2-801b-4a6f-96f1-f9ffd7b88574__IMG_20220623_000620.jpg"
                className="avatar"
              />
            </div>
            <div className="ellipse" />
            <TextXS className="num-of-posts">15k posts</TextXS>
          </div>
        </div>
        <div className="follow-btn-container">
          <div className="follow-btn-wrapper">
            <PlusIcon />
            <TextXS className="follow-all">Follow All</TextXS>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
