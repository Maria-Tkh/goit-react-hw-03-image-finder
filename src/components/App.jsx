import { Component } from 'react';
import { fetchImages } from './api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
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
    this.setState({ page: 1, gallery: [], imageTags });
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  // Реакция на изменение state, делаем запросы
  async componentDidUpdate(_, prevState) {
    const { imageTags, page } = this.state;
    if (prevState.imageTags !== imageTags || prevState.page !== page)
      try {
        const gallery = await fetchImages(imageTags, page);
        this.setState({ gallery: [...prevState.gallery, ...gallery] });
      } catch (error) {
        console.log('error');
      }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { gallery } = this.state;
    const showGallery = gallery.length > 0;
    return (
      <div>
        <Searchbar onSearch={this.handleFormSubmit} />
        <ImageGallery gallery={gallery} />
        {showGallery && <Button handleLoadMore={this.handleLoadMore} />}
        {/* < ImageGalleryItem /> */}
      </div>
    );
  }
}
