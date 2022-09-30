import { loginStart, setLoggedInState } from '../store/reducers/auth_reducer';

const getNextYear = () => {
  let d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const nextYear = new Date(year + 1, month, day);

  return nextYear;
};

export const loginAction = ({ email, password }) => {
  const expiringDate = getNextYear();
  return (dispatch) => {
    dispatch(loginStart());
    console.log('email, password', email, password);
    dispatch(setLoggedInState(true));
  };
};
