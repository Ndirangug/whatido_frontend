import styled from 'styled-components';

export const FeedSkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 475px;
  margin: 0 auto;
  position: relative;
  display: flex;

  .info-skeleton-container {
    position: absolute;
    width: 70%;
    z-index: 2;
    bottom: 2rem;
    left: 2rem;
  }

  .info-skeleton-avatar {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const FeedInfoSkeletonContainer = styled.div`
  width: 60%;
  z-index: 2;

  .info-skeleton-avatar {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const ExploreSkeletonContainer = styled.div`
  width: 100%;

  .carousel-skeleton-container {
    height: 10rem;
    display: flex;
    align-items: center;
  }
`;

export const ExplorePageProfileSkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 0.5rem;

  .banner-skeleton {
    border-radius: 0.5rem;
  }

  .avatar-skeleton {
    justify-content: center;
    padding-left: 1rem;
    margin-top: -3rem;
    margin-bottom: 1rem;
  }

  .avatar-follow-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
`;

export const ExploreCategorySkeletonContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
`;

export const ExploreCategorySkeletonCardContainer = styled.div`
  width: 100%;
  border: 1px solid var(--main-border);
  border-radius: 0.5rem;
  overflow: hidden;

  .explore-image-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.25rem;
  }

  .explore-avatar-skeleton {
    display: flex;
    gap: 0.2rem;
  }

  .skeleton-card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
`;

export const ExploreExpertSkeletonContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
`;

export const ExploreExpertSkeletonCardContainer = styled.div`
  width: 100%;
  border: 1px solid var(--main-border);
  border-radius: 0.5rem;
  overflow: hidden;

  .explore-image-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.25rem;
  }

  .explore-avatar-skeleton {
    display: flex;
    gap: 0.2rem;
  }

  .skeleton-card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .avatar {
    display: flex;
    gap: 1rem;
  }
`;

export const ExploreCategoryInfoSkeletonContainer = styled.div`
  width: 100%;

  .category-post-skeleton {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    margin: 0 1rem;
    margin-bottom: 1rem;
    margin-top: -1rem;
  }
`;

export const ExploreExpertInfoSkeletonContainer = styled.div`
  width: 100%;
`;

export const ExploreExpertDetailsSkeletonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .details-avatar {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .profile-skeleton {
    display: grid;
    grid-gap: 1rem;
    margin: 0 auto;
  }
`;

export const ProfilePageSkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 0.5rem;

  .banner-skeleton {
    border-radius: 0.5rem;
  }

  .avatar-skeleton {
    //align-items: center;
    justify-content: center;
    margin-top: -3rem;
    margin-bottom: 1rem;
  }

  .avatar-follow-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
`;

export const ProfileFeedSkeletonContainer = styled.div`
  display: flex;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  height: 10rem;
`;

export const ProfileReviewSkeletonContainer = styled.div`
  width: 100%;
`;

export const ProfileReviewInfoSkeletonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .avatar {
    display: flex;
    gap: 0.5rem;
  }

  .avatar-info {
    display: flex;
    flex-direction: column;
  }
`;
