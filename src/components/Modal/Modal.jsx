import { Component } from 'react';
import { createPortal } from 'react-dom';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  state = {
    largeImageURL: '',
    tags: '',
  };
  // закрытие модалки по Esc
  componentDidMount() {
    console.log('ModalcomponentDidMount ');
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    console.log('ModalcomponentWillMount ');
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      // console.log('esc')
      this.props.onClose();
    }
  };

  // Закрытие по клику на бэкдроп

  handleBackdropClick = e => {
    // console.log('currentTarget', e.currentTarget);
    // console.log('target', e.target);
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.state;
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          {this.props.children}
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
