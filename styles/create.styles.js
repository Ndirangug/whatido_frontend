import styled from 'styled-components';

export const CreatePageContainer = styled.div`
  width: 100%;
  overflow: scroll;
  padding: 0.5rem;
  height: 100%;
`;

export const DragDropContainer = styled.div`
  border: 2px dashed var(--main-border);
  gap: 10px;
  width: 80%;
  margin: 0 auto;
  padding-block: 10vh;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  trasition: all 2s ease-in;

  &:hover {
    background: var(--main-background);
  }

  .margin-bottom {
    margin-bottom: 20px;
  }

  .drop-input {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 999px;
    opacity: 0;
    cursor: pointer;
  }
`;

export const UploadMainContainer = styled.div`
  display: flex;
  align-items: center;

  .drapAndDropContainer {
    width: 30%;
  }

  .inputContainer {
    width: 70%;
  }
`;

export const UploadInputPreviewContainer = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  .preview-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .labelAndFieldContainer {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;

    .extraHeight {
      height: 20vh;
    }
  }

  .checkbox-wrapper {
    display: flex;
    gap: 30px;
    font-size: 16px;

    .labelAndCheckboxContainer {
      display: flex;
      gap: 8px;
    }
  }

  .input {
    border: none;
    outline: none;
    width: 100%;
    height: 5rem;
    background-color: transparent;
    font-size: 1rem;
    resize: none;
    font-family: 'Gilroy-Medium' !important;

    ::placeholder {
      color: var(--main-gray);
    }
  }

  .preview-conatiner {
    background: var(--gray-variant-i);
    height: 5rem;
    width: 5rem;
    margin-right: 0.5rem;
    overflow: none;
  }
`;

export const TagLocateContainer = styled.div`
  padding: 0.25rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--main-border);
  width: 100%;

  .input {
    border: none;
    outline: none;
    width: 100%;
    height: 2rem;
    background-color: transparent;
    font-size: 1rem;
    font-family: 'Gilroy-Medium' !important;

    ::placeholder {
      color: var(--main-gray);
    }
  }
`;

export const SelectFeatureContainer = styled.div`
  display: flex;
  align-items: center;

  .select {
    border-radius: 2px;
    border: 1px solid var(--main-border);
    margin-right: 0.5rem;

    &focus {
      border: 1px solid var(--main-black);
      background: 1px solid var(--main-black);
      color: #fff;
    }
  }
`;

export const CreateButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  gap: 16px;
`;

export const PostButtonContainer = styled.button`
  color: ${({ textColor }) => textColor};
  background: ${({ color }) => color};
  font-size: 1rem;
  font-weight: 400;
  padding: 8px 64px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
`;

export const PreviewContainer = styled.div`
  width: 100%;
  height: 12rem;
  .video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const InputField = styled.input`
  border: 1px solid var(--main-border);
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  padding: 8px;

  &:focus {
    outline: none;
  }
`;

export const SelectField = styled.select`
  border: 1px solid var(--main-border);
  border-radius: 5px;
  width: 50%;
  font-size:16px;
  padding 8px;

  &:focus {
    outline: none;
  }
`;

export const AbsoluteDiv = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);

  span {
    font-size: 20px;
    font-weight: 700;
    margin-left: 12px;
    cursor: pointer;
  }
`;
