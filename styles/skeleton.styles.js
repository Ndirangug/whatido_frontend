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
