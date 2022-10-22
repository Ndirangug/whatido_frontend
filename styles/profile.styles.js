import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const ProfileInfoContainer = styled.div`
  .banner-conatiner {
    width: 100%;
    height: 9rem;
    background: var(--main-indigo);
  }

  .info-conatiner {
    margin-top: -5rem;
    padding: 1rem;
  }

  .info-name-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .info {
    padding: 0 0.5rem 0 0;
    max-width: 18rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .category-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 0.25rem 0;
  }
  .category {
    background: var(--main-tag);
    padding: 0.1rem 0.5rem;
    border-radius: 4px;
  }

  .follow-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }
  .follow-content {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: rgba(0, 20, 51, 0.5);
  }
  .count-container {
    background: var(--main-indigo);
    padding: 0.1rem 0.5rem;
    border-radius: 4px;
    color: white;
  }
`;

export const ProfileMediaContainer = styled.div`
  padding: 0 1rem;
  width: 100%;

  .content-select-tab {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-gap: 1rem;
  }
`;

export const SelectTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  cursor: pointer;
  border-bottom: ${({ selected }) =>
    selected ? '2px solid var(--main-border)' : 'none'};

  .feed-icon {
    position: relative;
  }

  .text {
    position: absolute;
    bottom: -5px;
    right: -1rem;
  }
`;

export const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.25rem;
  padding: 0.5rem 0;
`;

export const FeedCardContainer = styled.div`
  border-radius: 4px;
  width: 100%;
  overflow: hidden;
`;

export const ProfileReviewContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 0.5rem 0;
  width: 100%;
`;

export const ReviewCardContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;

  .review-info-container {
    width: 100%;
  }

  .star-flex {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-left: 0.5rem;
  }

  .review-into-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .review-time {
    color: rgba(0, 20, 51, 0.5);
  }
  .review-comment {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
