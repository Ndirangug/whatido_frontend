import styled from 'styled-components';

export const GlobalContainer = styled.div`
  display: grid;

  min-height: 100vh;
  height: -webkit-fill-available;
  grid-template-rows: auto 1fr auto;
  background: red;
`;
