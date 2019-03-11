import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'gatsby';
import './Modal.scss';

const appRoot = typeof window !== 'undefined' ? document.getElementById('___gatsby') : null;

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKey, false);
    window.addEventListener('beforeunload', this.onUnload);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKey, false);
    window.removeEventListener('beforeunload', this.onUnload);
  }

  onUnload = event => {
    const { warnBeforeClose } = this.props;
    // eslint-disable-next-line
    if (warnBeforeClose && event) event.returnValue = 'Are you sure?';
  };

  handleEscKey = event => {
    const { closeModal } = this.props;
    if (event.keyCode === 27 && closeModal) closeModal(event);
  };

  handleModalBackgroundClick = event => {
    const { closeModal } = this.props;
    if (!event || !event.target || !closeModal) return null;
    const { className } = event.target;
    if (className && typeof className === 'string' && className.indexOf('modal ') !== -1) {
      return closeModal(event);
    }
    return null;
  };

  render() {
    const { active, closeModal, title, children, className, fromSide, ModalFooter } = this.props;
    if (!active) return null;
    return ReactDOM.createPortal(
      <div
        className={`modal ${fromSide ? 'side-modal' : 'overlay-modal'} ${className || ''}`}
        onClick={event => this.handleModalBackgroundClick(event)}
        role="dialog"
        >
        <div className="modal-content">
          {title && (
            <div className="modal-content-title">
              <h3>{title}</h3>
              {closeModal && (
                <Link className="close" to="#" onClick={event => closeModal(event)}>
                  Close
                </Link>
              )}
            </div>
          )}
          <div className="modal-content-body">{children}</div>
          {ModalFooter && (
            <div className="modal-footer">
              <ModalFooter />
            </div>
          )}
        </div>
      </div>,
      appRoot
    );
  }
}
