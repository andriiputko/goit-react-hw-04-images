import PropTypes from 'prop-types';
import cl from "./Button.module.css"

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className={cl.buttonContainer}>
      <button className={cl.button} type="button" onClick={onClick}>
      Load more
    </button>
    </div>
  );
}

export default LoadMoreButton;

LoadMoreButton.propTypes = {
  onClick: PropTypes.func,
};