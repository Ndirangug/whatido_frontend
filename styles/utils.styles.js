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

export const BigButtonContainer = styled.button`
  padding: 1rem;
  color: #fff;
  background: var(--main-blue);
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  white-space: nowrap;
  width: 100%;
`;

export const InputFieldContainer = styled.div`
  display: grid;
  grid-gap: 0.25rem;

  .label {
    font-size: 1rem;
    font-weight: 400;
  }

  .input-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .eye-icon {
    color: var(--gray-icon);
    height: 1.2rem;
    width: 1.2rem;
    position: absolute;
    right: 0.75rem;
    cursor: pointer;
  }

  .input {
    width: 100%;
    border: ${({ error }) =>
      error ? '1px solid red' : '1px solid var(--main-border)'};
    padding: 0.75rem 0.5rem;
    border-radius: 0.25rem;
    outline: none;
    font-size: 1rem;

    &focus {
      border: 1px solid var(--main-border);
    }
  }
`;

export const AuthOptionContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--main-border);
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;

  .option-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .option-text {
    font-size: 1rem;
    font-weight: 500;
    flex: 1;
    text-align: center;
  }

  .email {
    color: var(--main-color);
  }

  .fb {
    color: #3b5998;
  }
  .twitter {
    color: #1da1f2;
  }
`;
