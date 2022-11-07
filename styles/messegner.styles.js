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
  padding: 1rem;

  .select-contaier {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }
`;

export const SelectContainer = styled.div`
  padding-bottom: 0.5rem;
`;
