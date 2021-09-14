import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import axios from 'axios';

// const API_KEY = '22578935-bf31ef834e5011bcd0b44501d';

// axios.default.baseURL = 'https://pixabay.com/api/';

const fetchImages = async (imageTags, page) => {
  // const params = 'fields = id;webformatURL;largeImageURL';
  const response = await axios.get(
    `https://pixabay.com/api/?key=22578935-bf31ef834e5011bcd0b44501d&q=${imageTags}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`,
  );
  return response.hits;
};

export class App extends Component {
  state = {
    imageTags: '',
    page: 1,
    gallery: [],
    requestState: 'idle',
  };

  //Делаем запись в state
  handleFormSubmit = imageTags => {
    this.setState({ imageTags });
  };

  // Реакция на изменение state, делаем запросы
  async componentDidUpdate(_, prevState) {
    if (prevState.imageTags !== this.state.imageTags) {
      const gallery = await fetchImages(this.state.imageTags);
      this.setState({ gallery });
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSearch={this.handleFormSubmit} />
      </div>
    );
  }
}
