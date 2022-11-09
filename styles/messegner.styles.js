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
