import styled from 'styled-components';

export const ComponentsContainer = styled.div`
  height: 100%;
  width: 100%
  display: grid;
  align-items: start;

  .input-container {
    display: grid;
    grid-gap: 0.5rem;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }
  }

  .btn-container {
    margin: 3rem 0 1rem 0;
  } 
`;
