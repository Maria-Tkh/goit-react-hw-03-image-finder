import axios from 'axios';

const API_KEY = '22578935-bf31ef834e5011bcd0b44501d';
const BASE_URL = 'https://pixabay.com/api/';

// axios.default.baseURL = BASE_URL;
// axios.defaults.params = {
//   key: API_KEY,
// }

export const fetchImages = async (imageTags, page) => {
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${imageTags}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`,
  );
  return response.data.hits;
};
