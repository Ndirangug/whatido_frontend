import axios from 'axios';
import { API_URL } from '../../constants/api';

export const followAction = (endpoint, data) => {
  return axios.post(`${API_URL}/${endpoint}`, data);
};
