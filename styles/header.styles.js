import styled from 'styled-components';

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0 1px 1px #eee;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;
  padding: 0.5rem 1rem;

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
    justify-content: space-between;
    flex: 1;
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

  .search-container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 34rem;
    align-items: flex-start;
    justify-content: start;
    padding: 0.5rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.7rem;
    background-color: whitesmoke;

    &:focus-within {
      border: 1px solid #161823;
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
