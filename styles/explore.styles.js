import styled from 'styled-components';

export const ExplorePageContainer = styled.div`
  height: 100%;
  margin: 1rem;
  overflow: hidden;
`;
export const ContentPageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  scroll-snap-type: y mandatory;
  position: relative;

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
    background-image: url('https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg');
    object-fit: fill;
    border-radius: 7px;
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
    width: 15.438rem;
    height: 24px;
    font-family: 'Gilroy-Regular';
    font-size: 16px;
    line-height: 24px;
    color: #666666;
    flex: none;
    flex-grow: 1;
    border: none;
    outline: none;
    margin: 0 0.5rem;
  }

  .search-icons {
    padding: 0 0.5rem;
  }
`;
