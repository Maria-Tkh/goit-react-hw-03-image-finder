export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, largeImageURL, tags, handleSelectedImage } = image;
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => handleSelectedImage(largeImageURL, tags)}
      />
    </li>
  );
};
