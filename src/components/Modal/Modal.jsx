export const Modal = ({ largeImageURL }) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
