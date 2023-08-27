import { Component } from 'react';
import { createPortal } from 'react-dom';
import cl from "./Modal.module.css"

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.modalKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.modalKeyDown);
  }

  modalKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  modalBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { selectedImage, tags } = this.props;

    return createPortal(
      <div className={cl.backdrop} onClick={this.modalBackdropClick}>
        <div>
          <img className={cl.image} src={selectedImage} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
