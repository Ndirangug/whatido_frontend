import styled from 'styled-components';

export const MessengerPageContainer = styled.div`
  background: white;
  max-width: 1280px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

export const SidebarContainer = styled.div`
  width: 30%;
  height: 100%;
  border-right: 1px solid var(--main-border);
  padding: 0.5rem;

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
 flex-direction:column;
 gap 1rem;
`;
