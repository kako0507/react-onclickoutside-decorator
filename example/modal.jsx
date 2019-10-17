import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalContent from './modal-content';

function Modal({ show, onClickOutside }) {
  return (
    <div
      className={classNames(
        'modal',
        { 'is-active': show },
      )}
    >
      <div className="modal-background" />
      <div className="modal-card">
        <ModalContent
          onClickOutside={onClickOutside}
          disableOnClickOutside={!show}
        />
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool,
  onClickOutside: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  show: false,
};

export default Modal;
