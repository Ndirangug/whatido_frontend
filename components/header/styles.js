import styled from 'styled-components';

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0 2px 2px #eee;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 999;

  .header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .header-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .header-text {
    font-size: 2rem;
    font-weight: 900;
    margin-left: 0.5rem;
  }
`;
