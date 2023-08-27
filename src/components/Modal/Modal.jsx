import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import cl from "./Modal.module.css";
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default function Modal ({selectedImage, tags, onClose}) {


  useEffect(() => {
    window.addEventListener('keydown', modalKeyDown);
  
    return () => 
      window.removeEventListener('keydown', modalKeyDown);
    
  })
  


  const modalKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const modalBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

    return createPortal(
      <div className={cl.backdrop} onClick={modalBackdropClick}>
        <div>
          <img className={cl.image} src={selectedImage} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }

  Modal.propTypes = {
    selectedImg: PropTypes.string,
    tags: PropTypes.string,
    onClose: PropTypes.func,
  };