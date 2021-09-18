import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery, handleSelectedImage }) => {
  console.log(gallery.webformatURL);
  return (
    <ul>
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
