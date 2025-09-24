import ReactDOM from 'react-dom';
import './styles.css';
import DeleteIcon from '../icons/DeleteIcon';
import type React from 'react';
import useBreakpoints from '@shared/hooks/useBreakpoints';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
  contentClassname?: string;
};

function Modal({ isOpen, onClose, children, icon, contentClassname }: ModalProps) {
  const { isMobile } = useBreakpoints();
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content quote-modal ${contentClassname}`}
        onClick={(e) => e.stopPropagation()}
      >
        {!isMobile && (
          <button className="modal-close" onClick={onClose}>
            <DeleteIcon />
          </button>
        )}

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
