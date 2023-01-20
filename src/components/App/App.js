import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    showModal: false,
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.query)
  }

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

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        <Button />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Закрыть модалку
            </button>
          </Modal>
        )}
        <ToastContainer theme="colored" position="top-right" autoClose={2000} />
      </div>
    );
  }
}
