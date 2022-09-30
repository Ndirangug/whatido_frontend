import axios from 'axios';
import { Cookies } from 'react-cookie';
import { API_URL } from '../constants/api';
import {
  setAuthState,
  setLoginError,
  setLoginLoading,
  setUser,
  setVisibility,
} from '../store/reducers/auth_reducer';

const cookies = new Cookies();

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
    dispatch(setLoginLoading(true));

    return axios
      .post(
        `${API_URL}/auth/login`,
        { email, password },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
          },
        }
      )
      .then((response) => {
        console.log(response.status);
        if (response.data?.errorMessage) {
          dispatch(setLoginLoading(false));
          dispatch(setLoginError(true));
          return response.data;
        } else {
          //add user data to redux state
          dispatch(setUser(response.data.user));
          //set  cookies token with expiration
          cookies.set('token', response.data.token, {
            path: '/',
            secure: false,
            sameSite: 'Lax',
            expires: expiringDate,
          });

          //set cookies user
          cookies.set('user', response.data.user, {
            path: '/',
            secure: false,
            sameSite: 'Lax',
            expires: expiringDate,
          });
          //set user visibility
          dispatch(setVisibility(response.data.user.locationVisbility));
          let data = {
            locationLat: '',
            locationLng: '',
            email: email,
          };

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              data.locationLat = position.coords.latitude;
              data.locationLng = position.coords.longitude;
              axios.put(`${API_URL}/location`, data).then((response) => {
                return console.log(response.data);
              });
            });
          } else {
            alert('Geolocation is not supported by this browser.');
          }

          // axios
          //   .get(`${API_URL}/getExpert/${email}`)
          //   .then((res) => {
          //     var slug = res.data[0].slug;
          //     var category = res.data[0].expertCategories[0];
          //     localStorage.setItem('slug', slug);
          //     localStorage.setItem('category', category);
          //   })
          //   .catch((err) => {
          //     console.error(err);
          //   });

          dispatch(setAuthState(true));
          dispatch(setLoginLoading(false));
          dispatch(setLoginError(false));

          return response;
        }
      })
      .catch((error) => {
        dispatch(setLoginLoading(false));
        dispatch(setLoginError(true));
        console.log(error);
        return error;
      });
  };
};
