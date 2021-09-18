export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  imageTags,
  tags,
  handleSelectedImage,
}) => {
  // console.log(webformatURL );
  // const { webformatURL, largeImageURL, tags, handleSelectedImage } = image;
  console.log(handleSelectedImage);
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => handleSelectedImage(largeImageURL, imageTags)}
      />
    </li>
  );
};
