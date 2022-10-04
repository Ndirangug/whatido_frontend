import styled from 'styled-components';

export const ExplorePageContainer = styled.div`
  height: 100%;
  margin: 1rem;
  overflow: hidden;
`;
export const ContentPageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  .explore-header {
    position: absolute;
    width: 5.25rem;
    height: 1rem;
    top: 1rem;
    font-size: 1.5rem;
    line-height: 1rem;
    letter-spacing: 0.025rem;
    color: #001433;
  }

  .rectangle-container {
    position: absolute;
    width: 100%;
    height: 11.5rem;
    top: 8rem;
    background: #d9d9d9;
    object-fit: fill;
    border-radius: 7px;
  }

  .banner-img {
    border-radius: 7px;
  }

  .categories {
    top: 21.5rem;
    font-size: 1.2rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem;
  margin: auto;
  position: absolute;
  width: 100%;
  height: 3rem;
  top: 4rem;
  background: #ffffff;
  box-shadow: inset 0rem -0.063rem 0rem #bebebe;

  .search-input {
    height: 24px;
    font-family: 'Gilroy-Regular';
    font-size: 16px;
    line-height: 24px;
    color: #666666;
    flex: none;
    flex-grow: 1;
    border: none;
    outline: none;
  }
`;

export const ExploreCardsContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-gap: 25px;
  top: 24rem;
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

  .img-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 0.5rem;
    width: 100%;
    height: 70px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .img {
    background: url(.jpg), #d9d9d9;
    border-radius: 4px;
    margin: 0 1rem;
    flex: none;
    order: 0;
    flex-grow: 0;
    scroll-snap-align: start;
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
    width: 97px;
    height: 22px;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #001433;
    flex: none;
    order: 0;
    flex-grow: 0;
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
    width: 44px;
    height: 22px;
    font-family: 'Gilroy-Medium';
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
    width: 41px;
    height: 22px;
    font-family: 'Gilroy-Medium';
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
  }

  .follow-all {
    width: 56px;
    height: 22px;
    font-family: 'Gilroy-Medium';
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #001433;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
