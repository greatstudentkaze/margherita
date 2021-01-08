import { useState, useRef } from 'react';

const useOrderConfirm = () => {
  const [isOpened, setIsOpened] = useState(false);
  const overlayRef = useRef(null);

  const hideOverlay = () => {
    overlayRef.current.style.animationName = 'hide';
    setTimeout(() => setIsOpened(false), 250);
  }

  const closeModal = evt => {
    if (evt.target === overlayRef.current) {
      hideOverlay();
    }
  };

  return { isOpened, setIsOpened, overlayRef, closeModal };
};

export default useOrderConfirm;
