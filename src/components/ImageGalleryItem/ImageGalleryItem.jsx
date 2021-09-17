export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, handleSelectedImage }) => {
  console.log(webformatURL);
  // const { webformatURL, largeImageURL, tags, handleSelectedImage } = image;
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
