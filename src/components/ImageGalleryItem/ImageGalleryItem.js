import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapePress);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.onEscapePress);
  }

  onEscapePress = event => {
    if (event.code === 'Escape') {
      this.props.onClouse();
    }
  };

  handleToggelModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    const { isModalOpen } = this.state;
    return (
      <>
        <li className="ImageGalleryItem">
          <img
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={tags}
            onClick={this.handleToggelModal}
          />
        </li>
        {isModalOpen && (
          <Modal url={largeImageURL} onClouse={this.handleToggelModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
};
