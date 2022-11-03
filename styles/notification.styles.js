import styled from 'styled-components';

export const NotificationContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 203px;
  right: 0px;
  top: 65px;
  background: #ffffff;
  border: none;
  box-shadow: 3px 19px 11px rgba(0, 0, 0, 0.05), 0px 2px 5px rgba(0, 0, 0, 0.1),
    0px 0px 0px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 475px) {
    width: 292px;
    height: 301px;
    right: 6rem;
    border-radius: 12px;
    padding: 3rem 2rem;
  }

  @media (min-width: 1500px) {
    right: 15rem;
  }

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

export const LgContainer = styled.div`
  background: lightgray;
`;
export const NotificationLgContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
  padding-left: 0rem !important;
  background: #fff;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 1200px) {
    margin: 1rem auto;
    border-radius: 10px;
  }
`;

export const NotificationPageContainer = styled.div`
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.5rem;
    margin: 0.5rem 0;

    @media (min-width: 768px) {
      padding-left: 2rem;
    }
  }

  .details-container {
    display: grid;
    grid-template-rows: 0.5fr auto;
    margin: 1rem 0;
  }

  .notification-date {
    border-bottom: 1px solid var(--main-border);
    padding: 0.5rem 1rem;
    margin-right: 1rem;

    @media (min-width: 768px) {
      padding: 0.5rem 4rem;
      margin-right: 2rem;
    }
  }
`;

export const NotificationCardContainer = styled.div`
  .notification-details {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1rem;
    margin: 0.5rem 0;
    gap: 0.5rem;
    cursor: pointer;

    @media (min-width: 768px) {
      padding: 0 4rem;
    }
  }

  .notification-text-wrapper {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
  }

  .bold-text {
    color: var(--main-indigo);
  }
`;
