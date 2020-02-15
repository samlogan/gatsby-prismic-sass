import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const appRoot = typeof window !== 'undefined' ? document.getElementById('app') : null;

const Modal = props => {
  const { active, closeModal, children, className, warnBeforeClose, title } = props;

  const [mounted, setMounted] = useState(false);

  const onUnload = event => {
    // eslint-disable-next-line
    if (warnBeforeClose && event) event.returnValue = 'Are you sure?';
  };

  const handleEscKey = event => {
    if (event.keyCode === 27 && closeModal) {
      return closeModal(event);
    }
  };

  const handleModalBackgroundClick = event => {
    if (!event || !event.target || !closeModal) return null;
    const { className: clickedClassName } = event.target;
    if (clickedClassName && typeof clickedClassName === 'string' && clickedClassName.indexOf('modal ') !== -1) {
      return closeModal(event);
    }
    return null;
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey, false);
    window.addEventListener('beforeunload', onUnload);
    setMounted(true);
    return () => {
      document.removeEventListener('keydown', handleEscKey, false);
      window.removeEventListener('beforeunload', onUnload);
    };
  }, []);

  if (!active || !mounted) return null;

  return ReactDOM.createPortal(
    <div className={`modal ${className || ''}`} onClick={event => handleModalBackgroundClick(event)} role="dialog">
      <div className={`modal-content ${title ? 'custom-title' : null}`}>
        <div className={`modal-title-close ${title ? 'title' : 'no-title'}`}>
          {title ? <h3 className="modal-title">{title}</h3> : null}
          <a href="#close" onClick={closeModal}>
            <span
              className={`icon icon-cross-${title ? 'white' : 'dark'} modal-cross-close ${
                title ? 'custom-title' : null
              }`}
            ></span>
          </a>
        </div>
        {children}
      </div>
    </div>,
    appRoot
  );
};

export default Modal;
