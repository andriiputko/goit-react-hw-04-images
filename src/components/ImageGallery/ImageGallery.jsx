import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import cl from "./ImageGallery.module.css"

const ImageGallery = ({ images, selectedImage }) => {
  return (
    <ul className={cl.list}>
        {images.map(({id, webformatURL, tags, largeImageURL}) => (
        
          <ImageGalleryItem
            key={id}
            smallUrl={webformatURL}
            tags={tags}
            selectedImage={() => selectedImage(largeImageURL, tags)}
          />
        
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.func,
};
