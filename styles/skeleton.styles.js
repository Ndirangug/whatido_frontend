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
    height: 14rem;
    display: flex;
    align-items: center;
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
