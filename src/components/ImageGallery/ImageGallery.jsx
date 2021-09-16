import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, largeImageURL, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          //   onClick={onModalOpen}
        />
      ))}
    </ul>
  );
};
