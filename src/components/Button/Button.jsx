import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ handleLoadMore }) => {
  return (
    <button type="button" className="Button" onClick={handleLoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
