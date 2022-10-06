import styled from 'styled-components';

export const NotificationContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 292px;
  height: 301px;
  left: -150px;
  top: 59px;
  background: #ffffff;
  border: none;
  box-shadow: 3px 19px 11px rgba(0, 0, 0, 0.05), 0px 2px 5px rgba(0, 0, 0, 0.1),
    0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 3rem 2rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  .border-top {
    border-top: 1px solid #dddddd;
  }
  .notification-wrapper {
    border-bottom: 1px solid #dddddd;
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    background: url();
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0.5rem 0;
    margin-right: 0.5rem;
  }

  .notification-text {
    width: 170px;
    height: 22px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
