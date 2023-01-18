import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div>
        <Modal />
      </div>
    );
  }
}
