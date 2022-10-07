import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import { CardContainer } from '../../../styles/explore.styles';
import { BaseAvatar } from '../avatars/Avatar';
import PlusIcon from '../icons/PlusIcon';
import { TextXS } from '../typography/Typography';

const Card = ({ category, count, thumbnail, avatar, numOfExperts }) => {
  const largeScreen = useMediaQuery('(min-width:475px)');

  return (
    <CardContainer>
      <div className="img-wrapper">
        {thumbnail?.slice(0, 4)?.map(({ thumbnail }) => (
          <Image
            key={thumbnail[0]?.key}
            src={thumbnail[0]?.cdnUrl}
            alt="explore"
            width={largeScreen ? '140px' : '80px'}
            height={largeScreen ? '110px' : '70px'}
            className="img"
          />
        ))}
      </div>

      <div className="details-container">
        <div className="details-wrapper">
          <TextXS className="category-title">{category}</TextXS>
          <div className="experts-wrapper">
            <TextXS className="num-of-experts">{`${numOfExperts?.count} experts`}</TextXS>
            <div className="experts-avatars">
              {avatar?.slice(0, 4)?.map(({ imageUrl }) => (
                <BaseAvatar
                  key={imageUrl?.key}
                  alt="what i do"
                  sx={{ width: '19px', height: '19px' }}
                  src={imageUrl?.cdnUrl}
                  className="avatar"
                />
              ))}
            </div>
            <div className="ellipse" />
            <TextXS className="num-of-posts">{`${count} posts`}</TextXS>
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
