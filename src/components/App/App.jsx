import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from '../services/api';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Spinner } from '../Loader/Loader';
import './App.css';

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
    // this.setState({ page: this.state.page + 1 });
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  // Управление модалкой

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSelectedImage = (largeImageURL, tags) => {
    this.setState({ largeImageURL, tags });
    this.toggleModal();
  };

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  // Реакция на изменение state, делаем запросы
  async componentDidUpdate(_, prevState) {
    const { imageTags, page } = this.state;

    if (prevState.imageTags !== imageTags || prevState.page !== page)
      try {
        this.setState({ requestStatus: 'pending' });
        const gallery = await fetchImages(imageTags, page);

        this.setState(
          prevState => ({
            gallery: [...prevState.gallery, ...gallery],
            requestStatus: 'resolved',
          }),
          () => {
            this.handleScroll();
          },
        );
        if (gallery.length === 0) {
          return toast('Sorry, there are no images matching your search query. Please try again.');
        }
      } catch (error) {
        console.log(error);
      }
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
        {isLoading && <Spinner />}
        <ImageGallery gallery={gallery} handleSelectedImage={this.handleSelectedImage} />
        {showGallery && <Button handleLoadMore={this.handleLoadMore} />}
        <Toaster position="top-right" />
      </div>
    );
  }
}
