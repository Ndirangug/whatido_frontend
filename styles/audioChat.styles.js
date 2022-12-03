// WIP converting previous CSS to styled-components

import styled from 'styled-components';

export const AudioChatContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 21;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  visibility: ${(props) => props.visibility};
`;
