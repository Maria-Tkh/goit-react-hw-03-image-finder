import axios from 'axios';

const API_KEY = '22578935-bf31ef834e5011bcd0b44501d';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
};

export const fetchImages = async (imageTags, page) => {
  const response = await axios.get(
    `?q=${imageTags}&orientation=horizontal&safesearch=true&page=${page}&per_page=12`,
  );
  return response.data.hits;
};
