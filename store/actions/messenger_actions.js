import axios from 'axios';
import { API_URL } from '../../constants/api';

export const flattenArray = (arr) => {
  return arr.reduce((acc, curr) => {
    return [...acc, ...curr];
  }, []);
};

export const postNewMessage = (data, token) => {
  return axios.post(`${API_URL}/message`, data, {
    headers: { Authorization: token },
  });
};
