import axios from 'axios';
import { API_URL } from '../../constants/api';

export const getInspiringVideos = async () => {
  let url = `${API_URL}/feed/for-you?page=0`;
  const data = await axios.get(url);
  return data.data;
};
