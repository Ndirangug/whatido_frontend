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
    max-width: 1200px;
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
    display: flex;
    justify-content: flex-end;
    margin-left: 1rem;

    .header-icon {
      height: 2rem;
      width: 2rem;
      color: red;
      font-weight: 500;
    }
  }

  .create-container {
    display: none;
  }

  .unAuth-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
  }

  .auth-container {
    display: flex;
    align-items: center;

    .auth-content {
      margin: 0 0.5rem;
    }
  }

  .search-container {
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

    ::placeholder {
      color: var(--main-gray);
    }
  }

  .flex-content {
    display: flex;
    align-items: center;
  }

  @media (min-width: 768px) {
    .header-right {
      grid-gap: 2rem;
    }

    .create-container {
      display: inline;
    }

    .search-container {
      display: flex;
      align-items: center;
      margin: 0 1rem;
      width: 100%;
      max-width: 34rem;
      align-items: flex-start;
      justify-content: start;
      padding: 0.5rem 1rem;
      border: 1px solid var(--main-border);
      border-radius: 0.7rem;
      background-color: var(--main-background);
    }

    .search-icon {
      height: 20px;
      width: 20px;
      margin-right: 0.5rem;
      color: var(--main-gray);
    }

    .header-content {
      justify-content: space-between;
      flex: 1;
    }
  }

  @media (min-width: 1023px) {
    .search-container {
      margin: 0 4rem;
    }
  }
`;
