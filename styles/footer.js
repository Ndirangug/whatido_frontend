import styled from 'styled-components';

export const FooterContainer = styled.div`
  border-top: 1px solid #e6e6e6;
  box-shadow: 0 -2px 2px #eee;
  position: sticky;
  bottom: 0;
  background-color: #fff;
  z-index: 999;
  padding: 1rem 0.5rem;

  .inner-foot-container {
    box-sizing: border-box;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #262625;
  }

  .btn-text {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .icons-btn {
    height: 1.5rem;
    width: 1.5rem;
  }

  .footer-low-text {
    font-size: 0.9rem;
    font-weight: 600;
    color: #262625;
    width: 100%;
    display: none;
  }

  @media (min-width: 768px) {
    .inner-foot-container {
      display: none;
    }

    .footer-low-text {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
