import styled from 'styled-components';

export const HeaderContainer = styled.div`
  border-bottom: 2px solid #e6e6e6;
  box-shadow: 0 2px 2px #eee;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;
  padding: 1rem 0.5rem;

  .inner-head-container {
    box-sizing: border-box;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .header-left {
    margin-right: 4rem;
    cursor: pointer;
  }

  .header-right {
    display: flex;
    align-items: center;
    align-items: flex-end;
  }

  .header-image {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    flex-shrink: 0;
    object-fit: cover;
  }

  .header-logo {
    font-size: 2rem;
    margin-left: 0.5rem;
    line-height: 0;
    font-weight: 800;
  }

  .search-container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 34rem;
    align-items: flex-start;
    justify-content: start;
    margin: 0.3rem 0;
    padding: 0.5rem;
    border: 2px solid #e5e7eb;

    border-radius: 0.7rem;
    background-color: whitesmoke;

    &:focus-within {
      border: 2px solid #161823;
    }
  }

  .search-input {
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    font-size: 1rem;
  }

  .flex-content {
    display: flex;
    align-items: center;
  }

  @media (min-width: 768px) {
  }
`;
