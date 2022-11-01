import styled from 'styled-components';

export const GlobalStyleProvider = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
  position: fixed;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available !important;
  }

  @media (min-width: 768px) {
    grid-template-rows: auto 1fr;
  }
`;

export const DesktopNavigation = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  overflow: hidden;
`;
