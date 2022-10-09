import axios from 'axios';
import { API_URL, MEDIA_PROCESSING_URL } from '../../constants/api';

export const getInspiringVideos = async () => {
  let url = `${API_URL}/feed/for-you?page=0`;
  const data = await axios.get(url);
  return data.data;
};

export const getMediaProcessed = (data, urlPoint) => {
  const mediaUrl = `${MEDIA_PROCESSING_URL}/${urlPoint}`;
  return fetch(mediaUrl, {
    method: 'POST',
    body: data,
  });
};

export const postNewMedia = (data, token) => {
  return axios.post(`${API_URL}/media/create`, data, {
    'Content-Type': 'multipart/form-data',
    headers: { Authorization: token },
  });
};
