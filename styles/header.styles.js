import styled from 'styled-components';

export const HeaderContainer = styled.div`
  border-bottom: 1px solid var(--main-border);
  box-shadow: 0 1px 1px #eee;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;
  padding: 0.5rem;

  .inner-head-container {
    box-sizing: border-box;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    align-self: auto;
    justify-content: space-between;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .header-left {
    cursor: pointer;
  }

  .header-right {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
  }

  .search-container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 34rem;
    align-items: flex-start;
    justify-content: start;
    padding: 0.5rem 1rem;
    border: 1px solid var(--main-border);
    border-radius: 0.7rem;
    background-color: var(--main-background);
    display: none;

    &:focus-within {
      border: 1px solid var(--main-black);
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
    .header-right {
      grid-gap: 2rem;
    }

    .search-container {
      display: inline;
      margin: 0 1rem;
    }

    .header-content {
      justify-content: space-between;
      flex: 1;
    }
  }
`;
