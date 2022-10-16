import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const ProfileInfoContainer = styled.div`
  .banner-conatiner {
    width: 100%;
    height: 8rem;
    background: var(--main-indigo);
  }

  .info-conatiner {
    margin-top: -5rem;
    padding: 1rem;
  }

  .info-name-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NoBigAvatarContainer = styled.div`
  background: white;
  border-radius: 50%;
  width: max-content;
`;
