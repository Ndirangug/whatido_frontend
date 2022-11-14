import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { animated } from '@react-spring/web';
import { BsBlockquoteLeft } from 'react-icons/bs';
import { RiCheckDoubleLine, RiCheckLine } from 'react-icons/ri';
import styled from 'styled-components';

export const MessengerPageContainer = styled.div`
  background: white;
  max-width: 1280px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

export const SidebarContainer = styled.div`
  width: 35%;
  height: 100%;
  border-right: 1px solid var(--main-border);
  padding: 1rem;

  .select-contaier {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0.5rem 0 1rem 0;
  }
`;

export const SelectContainer = styled.div`
  padding-bottom: 0.25rem;
  color: ${({ selected }) =>
    selected ? 'var(--main-indigo)' : 'var(--gray-text)'};
  cursor: pointer;
  border-bottom: ${({ selected }) =>
    selected ? '2px solid var(--main-indigo)' : 'none'};
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background: var(--main-background);
  padding: 0.5rem;
  border-radius: 0.5rem;
  .search-input {
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    font-size: 1rem;
    margin-left: 0.5rem;

    ::placeholder {
      color: var(--main-gray);
    }
  }
`;

export const ConversationListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ConversationListCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .conv-info-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .info-container {
    flex: 1;
  }

  .info-name {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 50%;
  }
  .info {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--gray-text);
    width: 80%;
  }

  .detail {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .unread-count {
    background: var(--main-red);
    border-radius: 50%;
    padding: 0 0.25rem;
    color: #fff;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MessageScreenContainer = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex: 1;
`;

export const MessageHeaderContainer = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--main-border);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .flex-center {
    display: flex;
    align-items: center;
  }

  .sm-gap {
    gap: 1rem;
  }
  .xs-gap {
    gap: 0.5rem;
  }
`;

export const MessageFooterContainer = styled.div`
  padding: 0.5rem 1rem;
  border-top: 1px solid var(--main-border);
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  .input-container {
    background: white;
    flex: 1;
    display: flex;
    align-items: center;
    background: var(--main-background);
    padding: 0 0.5rem;
    border-radius: 0.5rem;

    .message-input {
      border: none;
      outline: none;
      width: 100%;
      background-color: transparent;
      font-size: 1rem;
      margin-left: 0.25rem;

      ::placeholder {
        color: var(--main-gray);
      }
    }
  }

  .icon-container {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    background: white;
    border-radius: 0.5rem;
  }
`;

export const MessageBodyContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-x: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 1rem;

  .istyping-container {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-left: 1rem;
  }

  .istyping-text {
    color: #78716c;
    font-size: 1.2rem;
    line-height: 1.25rem;
    margin: 0 0.5rem !important;
  }

  .icon {
    height: 3rem;
    width: 3rem;
    color: #111827;
    cursor: pointer;
    position: fixed;
    bottom: 100px;
    right: 14px;
    background: whitesmoke;
    border-radius: 50%;
    border: 1px solid #e5e7eb;
    padding: 0.5rem;
    display: ${({ isScrollView }) => (isScrollView ? 'inline' : 'none')};
  }

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #ffffff !important;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d4d4d8;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #d1d5db;
  }
`;

export const ImagePreviewModal = styled(Modal)`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #000;
  border: none;
  outline: none;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available !important;
  }

  .close_icon {
    position: absolute;
    background: whitesmoke;
    padding: 0.25rem;
    color: #dc2626;
    cursor: pointer;
    flex-shrink: 0;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

export const ImagePreviewModalContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagePreviewModalContent = styled.div`
  max-width: 640px;
  padding: 1rem;
  border-radius: 0.5rem;
  justify-items: center;
`;

export const ConversationDate = styled.div`
  background-color: whitesmoke;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin: 0.5rem auto;
`;

export const MessageWrapper = styled.div`
  margin: ${({ myMessage }) =>
    myMessage ? '0.25rem 0 0.25rem auto' : '0.25rem auto 0.25rem  0'};
  max-width: 85%;

  @media screen and (min-width: 475px) {
    max-width: 75%;
  }
  @media screen and (min-width: 520px) {
    max-width: 65%;
  }
  @media screen and (min-width: 768px) {
    max-width: 55%;
  }
`;

export const MessageContainer = styled(animated.div)`
  position: relative;
  display: flex;
  cursor: grab;

  &:hover {
    .message-options {
      visibility: visible;
    }
  }
`;

export const InnerContainer = styled.div`
  display: flex;
`;

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${({ myMessage, withAvatar }) =>
    myMessage && withAvatar && { 'margin-right': '0.5rem' }};
  ${({ myMessage, withAvatar }) =>
    myMessage && !withAvatar && { 'margin-right': '3rem' }};
  ${({ myMessage, withAvatar }) =>
    !myMessage && withAvatar && { 'margin-left': '0.5rem' }};
  ${({ myMessage, withAvatar }) =>
    !myMessage && !withAvatar && { 'margin-left': '3rem' }};
  align-items: ${({ myMessage }) => (myMessage ? 'flex-end' : 'flex-start')};
`;

export const TimeText = styled(Typography)`
  color: #525252;
  margin: ${({ myMessage }) => (myMessage ? '0 0.25rem 0 auto' : '0')};
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 0.25rem;
`;

export const MessageText = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${({ myMessage }) => (myMessage ? '#E0F2FE' : '#F1F5F9')};
  position: relative;
  line-height: 2.25rem;
  flex-wrap: wrap;

  .zoomLink {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
  }
`;

export const QuoteTextContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #334155;
  margin-bottom: 0.5rem;

  .quote-media-container {
    display: flex;
    padding: 1rem;
    box-sizing: border-box;
  }

  .quote-img {
    height: 35px;
    width: 35px;
    object-fit: cover;
    margin-right: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
  }
`;

export const QuoteBackIcon = styled(BsBlockquoteLeft)`
  height: 1.5rem;
  width: 1.5rem;
  color: #334155;
  flex-shrink: 0;
  margin-right: 0.5rem;
`;
export const QuoteText = styled(Typography)`
  font-style: italic;
  margin: 0;
`;
export const DoubleCheckIcon = styled(RiCheckDoubleLine)`
  height: 1.25rem;
  bottom: 0;
  left: 0.5rem;
  position: absolute;
  color: #0284c7;
  flex-shrink: 0;
`;

export const CheckIcon = styled(RiCheckLine)`
  height: 1.25rem;
  bottom: 0;
  left: 0.5rem;
  position: absolute;
  color: #71717a;
  flex-shrink: 0;
`;

export const AddStoryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.5rem;

  &:hover {
    background: var(--main-background);
  }

  .story-avatar-container {
    position: relative;
  }

  .add-icon {
    position: absolute;
    bottom: -0.25rem;
    right: -0.25rem;
  }

  .info-container {
    flex: 1;
  }

  .info-name {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 50%;
  }
  .info {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--gray-text);
    width: 80%;
  }
`;

export const StoryUpdateContainer = styled.div`
  .update-text {
    width: 100%;
    background: var(--main-background);
    border-radius: 0.5rem;
    padding: 0.5rem;
    color: var(--gray-text);
    margin-bottom: 1rem;
  }
`;

export const StoryUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.5rem;

  &:hover {
    background: var(--main-background);
  }

  .info-container {
    flex: 1;
  }

  .info-name {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 70%;
  }
  .info {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--gray-text);
    width: 90%;
  }
`;
