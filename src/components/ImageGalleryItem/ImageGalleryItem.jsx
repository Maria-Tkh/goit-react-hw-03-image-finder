export const ImageGalleryItem = ({ image }) => {
  const { id, largeImageURL } = image;
  return (
    <li key={id} className="ImageGalleryItem">
      <img src={largeImageURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};
