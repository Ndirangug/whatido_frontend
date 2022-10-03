import { Avatar, Typography } from '@mui/material';
import Image from 'next/image';
import { CardContainer } from '../../styles/explore.styles';
import PlusIcon from '../utils/icons/PlusIcon';

const Card = () => {
  return (
    <CardContainer>
      <div className="img-wrapper">
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/profile/1655931996055__ab2869f2-801b-4a6f-96f1-f9ffd7b88574__IMG_20220623_000620.jpg"
          alt="explore"
          width="68px"
          height="70px"
          className="img"
        />
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1654782230047__9dab90b0-3c0f-42bc-af77-6713ee220241__tesla.jpg"
          alt="explore"
          width="68px"
          height="70px"
          className="img"
        />
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
          alt="explore"
          width="68px"
          height="70px"
          className="img"
        />
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1654782230047__9dab90b0-3c0f-42bc-af77-6713ee220241__tesla.jpg"
          alt="explore"
          width="68px"
          height="70px"
          className="img"
        />
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1654782230047__9dab90b0-3c0f-42bc-af77-6713ee220241__tesla.jpg"
          alt="explore"
          width="68px"
          height="70px"
          className="img"
        />
      </div>
      <div className="details-container">
        <div className="details-wrapper">
          <Typography variant="h6" className="category-title">
            Academic Tutoring
          </Typography>
          <div className="experts-wrapper">
            <Typography variant="h6" className="num-of-experts">
              25 experts
            </Typography>
            <div className="experts-avatars">
              <Avatar
                alt="what i do"
                sx={{ width: '19px', height: '19px' }}
                src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/profile/1655931996055__ab2869f2-801b-4a6f-96f1-f9ffd7b88574__IMG_20220623_000620.jpg"
                className="avatar"
              />
              <Avatar
                alt="what i do"
                sx={{ width: '19px', height: '19px' }}
                src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
                className="avatar"
              />
              <Avatar
                alt="what i do"
                sx={{ width: '19px', height: '19px' }}
                src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg"
                className="avatar"
              />
              <Avatar
                alt="what i do"
                sx={{ width: '19px', height: '19px' }}
                src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/profile/1655931996055__ab2869f2-801b-4a6f-96f1-f9ffd7b88574__IMG_20220623_000620.jpg"
                className="avatar"
              />
            </div>
            <div className="ellipse" />
            <Typography variant="h6" className="num-of-posts">
              15k posts
            </Typography>
          </div>
        </div>
        <div className="follow-btn-container">
          <div className="follow-btn-wrapper">
            <PlusIcon />
            <Typography variant="h7" className="follow-all">
              Follow All
            </Typography>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
