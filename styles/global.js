import styled from 'styled-components';

export const GlobalContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
  position: fixed;

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      height: -webkit-fill-available !important;
    }
  }

  @media (min-width: 768px) {
    grid-template-rows: auto 1fr;
  }
`;
