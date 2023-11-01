import React, { Component } from 'react';
import { GalleryItem, Image, LargeImage } from './ImageGalleryItem.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    background: '#0c0c0c',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    border: 'none',
    borderRadius: '12px',
    outline: 'none',
    padding: '0',
    height: 'calc(100vh - 40px)',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { isModalOpen } = this.state;
    return (
      <GalleryItem>
        <Image onClick={this.openModal} src={webformatURL} alt={tags} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <LargeImage src={largeImageURL} alt={tags} />
        </Modal>
      </GalleryItem>
    );
  }
}

