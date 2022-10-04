import styled from 'styled-components';

export const GlobalContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available !important;
  }

  @media (min-width: 768px) {
    grid-template-rows: auto 1fr;
  }
`;
