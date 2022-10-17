import Image from 'next/image';
import Link from 'next/link';
import { CardContainer } from '../../../styles/explore.styles';
import { BaseAvatar } from '../avatars/Avatar';
import PlusIcon from '../icons/PlusIcon';
import { TextXS } from '../typography/Typography';

const Card = ({ category, count, thumbnail, avatar, numOfExperts }) => {
  return (
    <>
      {thumbnail?.length >= 4 && (
        <Link href={`/category/${category}`}>
          <CardContainer>
            <div className="img-wrapper">
              {thumbnail?.slice(0, 4)?.map(({ thumbnail }) => (
                <Image
                  key={thumbnail[0]?.key}
                  src={thumbnail[0]?.cdnUrl}
                  alt="explore"
                  height="150px"
                  width="60px"
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
                        sx={{ width: '21px', height: '21px' }}
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
                  <TextXS className="follow-all">Follow</TextXS>
                </div>
              </div>
            </div>
          </CardContainer>
        </Link>
      )}
    </>
  );
};

export default Card;
