import ReactDOM from 'react-dom';
import './styles.css';
import DeleteIcon from '../icons/DeleteIcon';
import type React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
  contentClassname?: string;
};

function Modal({ isOpen, onClose, children, icon, contentClassname }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content quote-modal ${contentClassname}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <DeleteIcon />
        </button>

        <div className="quote-container">
          {icon && <div className="quote-icon">{icon}</div>}

          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
export default Modal;
