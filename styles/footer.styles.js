import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background: var(--main-black);
  width: 100%;
  height: max-content;
  position: fixed;
  bottom: 0;

  .footer-icon {
    height: 4rem;
    width: 4rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
