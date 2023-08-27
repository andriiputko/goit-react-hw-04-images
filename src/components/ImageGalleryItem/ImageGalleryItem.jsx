import PropTypes from 'prop-types';
import cl from "./ImageGalleryItem.module.css"

const ImageGalleryItem = ({tags, smallUrl, selectedImage}) => {
  return (
    <li className={cl.li}>
      <img className={cl.image} src={smallUrl} alt={tags} onClick={selectedImage} />
    </li>
  );
};


export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  previewImg: PropTypes.string,
  selectedImage: PropTypes.func,
};