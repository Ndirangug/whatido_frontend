import styled from 'styled-components';

export const ExplorePageContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: #fff;
`;
export const ContentPageContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  .category-container {
    display: grid;
    grid-gap: 1rem;
  }

  .text-position {
    color: var(--main-black);
  }

  .rectangle-container {
    position: absolute;
    width: 100%;
    height: 11.5rem;
    background: #d9d9d9;
    object-fit: fill;
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
  height: 140px;
  border: 1px solid rgba(0, 20, 51, 0.3);
  border-radius: 6px;
  overflow: hidden;
  padding: 0.5rem;

  @media (min-width: 475px) {
    height: 180px;
  }

  .img-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.5rem;
    object-fit: cover;
    margin-bottom: 0.8rem;
    height: 70px;

    @media (min-width: 475px) {
      height: 85px;
      margin-bottom: 2rem;
    }

    @media (min-width: 640px) {
      height: 100px;
      margin-bottom: 1rem;
    }
  }

  .img {
    background: var(--main-gray);
    border-radius: 4px;
  }

  .details-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .details-wrapper {
    display: grid;
    grid-template-rows: auto 0.5fr;
  }

  .category-title {
    font-size: 12px;
    color: var(--main-black);
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
    border-radius: 5px;
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
