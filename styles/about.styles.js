import styled from 'styled-components';

export const AboutPageContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1180px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-gap: 2rem;
`;

export const AboutCardContainer = styled.div`
  background: white;
  border-radius: 1rem;
  flex-direction: ${({ row }) => (row ? 'row' : 'row-reverse')};
  display: flex;
  padding: 1rem;
  gap: 1rem;

  .svg-container {
    flex: 0.5;
  }

  .info-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;
