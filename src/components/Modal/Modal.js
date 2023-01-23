import PropTypes from 'prop-types';
import { Component } from 'react';

export class Modal extends Component {
  render() {
    const { url, onClouse } = this.props;
    return (
      <div className="Overlay" onClick={onClouse}>
        <div className="Modal">
          <img src={url} alt="IMG" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
