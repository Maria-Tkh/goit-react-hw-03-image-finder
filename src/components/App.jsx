import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from './api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Load } from './Loader/Loader';

// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    imageTags: '',
    page: 1,
    gallery: [],
    requestStatus: 'idle',
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  //Делаем запись в state

  handleFormSubmit = imageTags => {
    this.setState({ page: 1, gallery: [], imageTags });
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  // Управление модалкой

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSelectedImage = (largeImageURL, imageTags) => {
    this.setState({ largeImageURL, imageTags });
    this.toggleModal();
  };

  // Реакция на изменение state, делаем запросы
  async componentDidUpdate(_, prevState) {
    const { imageTags, page } = this.state;
    if (prevState.imageTags !== imageTags || prevState.page !== page)
      try {
        this.setState({ requestStatus: 'pending' });
        const gallery = await fetchImages(imageTags, page);
        this.setState({
          gallery: [...this.state.gallery, ...gallery],
          requestStatus: 'resolved',
        });
        if (gallery.length === 0) {
          return toast('Sorry, there are no images matching your search query. Please try again.');
        }
        this.setState({
          gallery: [...this.state.gallery, ...gallery],
        });
      } catch (error) {
        // this.setState({ requestStatus: 'rejected' });
        // console.log('error');
      }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { gallery, showModal, largeImageURL, imageTags, requestStatus } = this.state;
    const isLoading = requestStatus === 'pending';
    const showGallery = gallery.length > 0 && !isLoading;

    return (
      <div>
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} alt={imageTags} />
        )}
        <Searchbar onSearch={this.handleFormSubmit} />
        {isLoading && <Load />}
        <ImageGallery gallery={gallery} handleSelectedImage={this.handleSelectedImage} />
        {showGallery && <Button handleLoadMore={this.handleLoadMore} />}
        <Toaster position="top-right" />
        {/* <ImageGalleryItem handleSelectedImage={this.toggleModal} /> */}
      </div>
    );
  }
}
