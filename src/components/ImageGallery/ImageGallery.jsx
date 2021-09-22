import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

export const ImageGallery = ({ gallery, handleSelectedImage }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
          handleSelectedImage={handleSelectedImage}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelectedImage: PropTypes.func.isRequired,
};
