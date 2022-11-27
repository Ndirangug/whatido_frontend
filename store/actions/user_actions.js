import axios from 'axios';
import { API_URL } from '../../constants/api';

export const followAction = (endpoint, data, token) => {
  return axios.post(`${API_URL}/${endpoint}`, data, {
    headers: { Authorization: token },
  });
};

export const likeAction = (endpoint, data, token) => {
  return axios.post(`${API_URL}/${endpoint}`, data, {
    headers: { Authorization: token },
  });
};

export const updateUserProfile = (data, token) => {
  return axios.post(`${API_URL}/media/create/web`, data, {
    'Content-Type': 'multipart/form-data',
    headers: { Authorization: token },
  });
};
