import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery, id }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(image => (
        <ImageGalleryItem
          key={id}
          image={image}
          //   onClick={onModalOpen}
        />
      ))}
    </ul>
  );
};
