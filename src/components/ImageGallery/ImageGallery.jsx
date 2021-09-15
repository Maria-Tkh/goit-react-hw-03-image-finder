import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery, onModalOpen }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(image => (
        <ImageGalleryItem src={image.webformatURL} onClick={onModalOpen} />
      ))}
    </ul>
  );
};
//
