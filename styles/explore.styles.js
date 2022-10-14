import styled from 'styled-components';

export const ExplorePageContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: #fff;
  width: 100%;
`;
export const ContentPageContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  .category-container {
    // position: sticky
    display: grid;
    grid-gap: 1rem;
  }

  .cards-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .search-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .search-icon {
    height: 20px;
    width: 20px;
    margin-right: 0.5rem;
    color: var(--main-gray);
  }

  .search-container {
    display: flex;
    align-items: center;
    margin: 0;
    align-items: flex-start;
    justify-content: start;
    padding: 0.5rem 1rem;
    border: 1px solid var(--main-border);
    border-radius: 0.7rem;
    background-color: var(--main-background);
  }

  .search-input {
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    font-size: 1rem;

    ::placeholder {
      color: var(--main-gray);
    }
  }

  .text-position {
    color: var(--main-black);
  }

  .rectangle-container {
    width: 100%;
    height: 11.5rem;
    background: #d9d9d9;
    border-radius: 7px;

    @media (min-width: 475px) {
      height: 15.5rem;
    }
  }

  .banner-img {
    border-radius: 7px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--main-border);

  .search-input {
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    color: #666666;
    flex: none;
    flex-grow: 1;
    border: none;
    outline: none;

    ::placeholder {
      color: var(--main-gray);
    }
  }
`;

export const ExploreCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 25px;
`;

export const CardContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 145px;
  border: 1px solid var(--main-border);
  border-radius: 12px;
  overflow: hidden;
  // padding: 0.5rem;
  margin: 1rem 0;

  @media (min-width: 475px) {
    height: 180px;
  }

  .img-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.1rem;
    object-fit: cover;
    margin-bottom: 0.8rem;
    height: 80px;

    @media (min-width: 475px) {
      height: 110px;
      margin-bottom: 1rem;
    }

    @media (min-width: 640px) {
      height: 100px;
      margin-bottom: 1rem;
    }
  }

  .experts-img-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.1rem;
    object-fit: cover;
    margin-top: 1rem;

    @media (min-width: 475px) {
      margin-top: 1.5rem;
    }
  }

  .img {
    background: var(--main-gray);
    // border-radius: 4px;
  }

  .details-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem;

    @media (min-width: 475px) {
      margin: 0.8rem 0.5rem;
    }
  }

  .details-wrapper {
    display: grid;
    grid-template-rows: auto 0.5fr;
  }

  .category-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--main-black);
    margin-bottom: 0.2rem;
  }

  .experts-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .num-of-experts {
    padding-right: 0.5rem;
    font-family: none;
    font-size: 10px;
    color: rgba(0, 20, 51, 0.5);
  }

  .experts-avatars {
    display: flex;
    flex-direction: row;
    padding-right: 0.5rem;
  }

  .avatar-details {
    display: flex;
  }

  .user-avatar-wrapper {
    margin-right: 0.5rem;
  }

  .avatar {
    background: var(--main-gray);
    border: 1px solid #ffffff;
    margin: 0px -4px;
  }

  .ellipse {
    width: 4px;
    height: 4px;
    background: #d0d0d0;
    border-radius: 50%;
    margin-right: 0.3rem;
  }

  .num-of-posts {
    font-family: none;
    font-size: 10px;
    letter-spacing: -0.408px;
    color: rgba(0, 20, 51, 0.5);
  }

  .follow-btn-container {
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 100px;
    height: 40px;
    background: rgba(0, 20, 51, 0.1);
    border-radius: 8px;
    cursor: pointer;
  }

  .follow-btn-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  .follow-all {
    font-size: 13px;
    letter-spacing: -0.408px;
    color: var(--main-black);
  }
`;
