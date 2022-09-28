import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 0.5rem 1rem;
  color: ${({ inLine }) => (inLine ? 'var(--main-black)' : '#fff')};
  background: ${({ inLine }) => (inLine ? '#fff' : 'var(--main-black)')};
  text-decoration: ${({ inLine }) => (inLine ? 'underline' : 'none')};
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  font-weight: ${({ inLine }) => (inLine ? '600' : '400')};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  white-space: nowrap;
`;

export const InputFieldContainer = styled.div`
  display: grid;
  grid-gap: 0.25rem;

  .label {
    font-size: 1rem;
    font-weight: 400;
  }

  .input {
    width: 100%;
    border: ${({ error }) =>
      error ? '1px solid red' : '1px solid var(--main-border)'};
    padding: 0.25rem;
    border-radius: 0.25rem;
    outline: none;

    &focus {
      border: 1px solid var(--main-border);
    }
  }
`;
