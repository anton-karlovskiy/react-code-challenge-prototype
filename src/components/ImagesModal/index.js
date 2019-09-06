
import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const ImagesModal = ({ srcs, isOpen, close, currentIndex }) => {
  return (
    <ModalGateway>
      { isOpen ? (
        <Modal onClose={close}>
          <Carousel views={srcs} currentIndex={currentIndex} />
        </Modal>
      ) : null }
    </ModalGateway>
  );
};

export default ImagesModal;
