import { Component } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount ');
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount ');
  }

  render() {
    return (
      <Overlay>
        <ModalStyled>
          <img src="" alt="" />
        </ModalStyled>
      </Overlay>
    );
  }
}
