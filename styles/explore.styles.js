import styled from 'styled-components';

export const ExplorePageContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;
export const ContentPageContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  overflow-y: scroll;
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
    top: 8rem;
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

  .categories {
    position: absolute;
    top: 21.5rem;
    font-size: 1.2rem;
    color: var(--main-black);

    @media (min-width: 475px) {
      top: 25rem;
    }
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
  position: relative;
  width: 100%;
  display: grid;
  grid-gap: 25px;
  top: 24rem;

  @media (min-width: 475px) {
    top: 27rem;
  }
`;

export const CardContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 140px;
  border: 1px solid rgba(0, 20, 51, 0.3);
  border-radius: 6px;
  flex: none;
  order: 0;
  flex-grow: 0;
  overflow: hidden;
  padding: 0.5rem;
  margin-bottom: 2rem;

  @media (min-width: 475px) {
    height: 180px;
  }

  .img-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    padding: 0px;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
    width: 100%;
    height: 70px;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media (min-width: 475px) {
      margin-bottom: 2.5rem;
    }

    @media (min-width: 666px) {
      margin-bottom: 3rem;
    }
  }

  .img {
    background: url(.jpg), #d9d9d9;
    border-radius: 4px;
    margin: 0 1rem;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .details-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    gap: 67px;
    width: 100%;
    height: 48px;
    flex: none;
    order: 1;
    flex-grow: 0;

    @media (min-width: 675px) {
      padding: 0 0.5rem;
    }

    @media (min-width: 746px) {
      padding: 0 1rem;
    }
  }

  .details-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 153px;
    height: 48px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .category-title {
    font-size: 12px;
    line-height: 22px;
    color: var(--main-black);
    flex: none;
  }

  .experts-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 153px;
    height: 22px;
    order: 1;
  }

  .num-of-experts {
    width: 60px;
    height: 22px;
    font-family: none;
    font-size: 10px;
    line-height: 22px;
    color: rgba(0, 20, 51, 0.5);
  }

  .experts-avatars {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 52px;
    height: 19px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  .avatar {
    background: url(.jpg), #d9d9d9;
    border: 1px solid #ffffff;
    margin: 0px -4px;
  }

  .ellipse {
    width: 4px;
    height: 4px;
    background: #d0d0d0;
    flex: none;
    order: 2;
    flex-grow: 0;
  }

  .num-of-posts {
    font-family: none;
    font-size: 10px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: rgba(0, 20, 51, 0.5);
    flex: none;
    order: 3;
    flex-grow: 0;
  }

  .follow-btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 100px;
    height: 40px;
    background: rgba(0, 20, 51, 0.1);
    border-radius: 5px;
    flex: none;
    order: 1;
  }

  .follow-btn-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 80px;
    height: 22px;
    cursor: pointer;
  }

  .follow-all {
    width: 56px;
    height: 22px;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: var(--main-black);
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
