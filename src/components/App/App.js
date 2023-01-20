import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';

export class App extends Component {
  state = {
    images: null,
    loading: false,
    showModal: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=31618598-dd0b87f36bc5180b6dfd99237&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(images => this.setState({ images }))
      .finally(() => this.setState({ loading: false }));
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <Searchbar />
        <ImageGallery />
        <Button />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Закрыть модалку
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
