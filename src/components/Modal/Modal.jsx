import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';
import { StyledModalBackDrop, StyledModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackDropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <StyledModalBackDrop onClick={handleBackDropClick}>
      <StyledModalContent>{children}</StyledModalContent>
    </StyledModalBackDrop>,
    modalRoot
  );
};
