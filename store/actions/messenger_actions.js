import axios from 'axios';
import { io } from 'socket.io-client';
import { API_URL } from '../../constants/api';

export const SOCKET_CONNECTION_OPTIONS = {
  transports: ['websocket', 'polling'],
  // upgrade: false
};
export const socket = io.connect(API_URL, SOCKET_CONNECTION_OPTIONS);

export const flattenArray = (arr) => {
  return arr.reduce((acc, curr) => {
    return [...acc, ...curr];
  }, []);
};

export const filterDuplicatesById = (arr, id) => {
  return arr.filter((item) => item._id !== id);
};

export const postNewMessage = (data, token) => {
  return axios.post(`${API_URL}/message`, data, {
    headers: { Authorization: token },
  });
};
