export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, handleSelectedImage }) => {
  // const { webformatURL, largeImageURL, tags, handleSelectedImage } = image;
  return (
    <li
      // image={ image}
      className="ImageGalleryItem"
    >
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => handleSelectedImage(largeImageURL, tags)}
      />
    </li>
  );
};
