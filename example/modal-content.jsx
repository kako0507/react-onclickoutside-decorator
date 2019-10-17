import React, { Component } from 'react';
import onClickOutside from '../lib';

@onClickOutside
class ModalContent extends Component {
  render() {
    return (
      <div>
        <header className="modal-card-head">
          <p className="modal-card-title">Modal</p>
        </header>
        <section className="modal-card-body">
          Try clicking outside the modal.
        </section>
        <footer className="modal-card-foot" />
      </div>
    );
  }
}

export default ModalContent;
