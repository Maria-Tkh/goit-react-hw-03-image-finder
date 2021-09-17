import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery }) => {
  console.log(gallery);
  return (
    <ul>
      {gallery.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem id={id} largeImageURL={largeImageURL} webformatURL={webformatURL} />
      ))}
    </ul>
  );
};
