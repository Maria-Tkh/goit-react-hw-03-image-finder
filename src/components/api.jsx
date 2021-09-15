import axios from 'axios';

// const API_KEY = '22578935-bf31ef834e5011bcd0b44501d';

// axios.default.baseURL = 'https://pixabay.com/api/';

// const params = 'fields = id;webformatURL;largeImageURL';

export const fetchImages = async (imageTags, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=22578935-bf31ef834e5011bcd0b44501d&q=${imageTags}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`,
  );
  return response.data.hits;
};
