import axios from 'axios';
import { API_URL } from '../../constants/api';
import { FETCH_CATEGORIES_SUCCESS } from '../actions/audio_chat_room';

const fetchCategories = async () => {
  const _res = await axios.get(`${API_URL}/getExpertsCategoryList`);
  return { type: FETCH_CATEGORIES_SUCCESS, categories: _res.data };
};

export const loadCategories = () => fetchCategories();
