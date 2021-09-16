import { Component } from 'react';
import { fetchImages } from './api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

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
        <ImageGallery gallery={this.gallery} />
      </div>
    );
  }
}
