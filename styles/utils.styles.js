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

export const SelectButtonContainer = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: var(--main-indigo);
  color: white;
  border: none;
  outline: none;
`;

export const BigButtonContainer = styled.button`
  padding: 1rem;
  color: #fff;
  background: var(--main-black);
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

export const CancelButtonContainer = styled.button`
  padding: 1rem;
  color: ${({ textColor }) => textColor};
  background: ${({ color }) => color};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  border: 1px solid rgba(0, 20, 51, 0.3);
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
    border: ${({ error }) => (error ? '1px solid red' : 'none')};
    padding: 0.75rem 0.5rem;
    border-radius: 0.25rem;
    outline: none;
    font-size: 1rem;
    width: 100%;
    height: 50px;
    background: #f1f1f1;
    border-radius: 8px;

    ::placeholder {
      color: rgba(0, 20, 51, 0.1);
    }

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

export const ReelsCardContainer = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  max-width: inherit;
  min-width: 100%;
  max-height: inherit;
  min-height: 100%;
  scroll-snap-align: start;

  .reels-info-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    z-index: 2;
  }

  .info-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 20rem;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .info-content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;
  }

  .content {
    width: 100%;
    height: 100%;
    background: var(--main-background);
    margin-bottom: 2rem;
    object-fit: cover;
    z-index: 1;
  }
  .reels-footer {
    position: absolute;
    bottom: 0;
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .play-icon {
    position: absolute;
    top: 45%;
    left: 47%;
    width: 100%;
    color: #fafafa;
    height: 2rem;
    width: 2rem;
  }

  .icons {
    color: #fafafa;
    height: 1.5rem;
    width: 1.5rem;
  }
`;
