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
