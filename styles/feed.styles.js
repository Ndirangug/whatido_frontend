import Modal from '@mui/material/Modal';
import styled from 'styled-components';

export const ViewFeedModal = styled(Modal)`
  display: none;

  @media (min-width: 475px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
    max-width: 1059px;
    max-height: 650px;
    margin: auto;
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      min-height: -webkit-fill-available !important;
    }
  }

  .modal-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    height: 100%;
    width: 100%;
    border-radius: 0.75rem;
    background: #ffffff;
    border: none;
    outline: none;
    // padding: 1rem;
  }

  .content {
    width: 100%;
    height: 100%;
  }

  .content-preview-container {
    align-self: flex-start;
    width: 100%;
    height: 100%;
    // filter: blur(5px);
    overflow: hidden;
    border-radius: 0.75rem 0 0 0.75rem;
  }

  .content-caption-container {
    height: 100%;
  }
`;

export const CaptionHeaderContainer = styled.div`
  padding: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .flex {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .margined {
    margin-right: 1rem;
  }

  .icon-btn {
    height: max-content;
    cursor: pointer;
    padding: 0.75rem;
  }

  .media-option-icon {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    flex-shrink: 0;
  }

  .options {
    position: relative;
  }

  .option-container {
    position: absolute;
    right: 0.6rem;
    top: 3.8rem;
    background-color: #ffffff;
    width: max-content;
    padding: 0.5rem 0rem;
    border-radius: 0.25rem;
    box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    display: grid;
    grid-gap: 0.5rem;
  }

  .option-text {
    color: #525252;
    font-size: 1.4rem;
    line-height: 1.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin: 0 !important;
    text-align: center;

    &:hover {
      background-color: whitesmoke;
    }
  }
`;
