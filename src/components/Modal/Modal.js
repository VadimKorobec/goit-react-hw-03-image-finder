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
