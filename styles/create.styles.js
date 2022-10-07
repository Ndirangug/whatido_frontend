import styled from 'styled-components';

export const CreatePageContainer = styled.div`
  width: 100%;
  overflow: scroll;
  padding: 0.5rem;
  display: grid;
  grid-gap: 0.5rem;
  height: 100%;

  .create-content {
    display: grid;
    grid-gap: 0.5rem;
    width: 100%;
  }
`;

export const DragDropContainer = styled.div`
  width: 100%;
  border: 2px dashed var(--main-indigo);
  gap: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  position: relative;

  .drop-input {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 999px;
    opacity: 0;
    cursor: pointer;
  }
`;

export const UploadInputPreviewContainer = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--main-border);
  display: flex;
  align-items: center;

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
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: auto;
`;

export const PostButtonContainer = styled.button`
  color: #fff;
  background: ${({ color }) => color};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  white-space: nowrap;
  width: 100%;
  height: 2rem;
`;
