import { useState, useRef } from 'react';

const useOrderThank = () => {
  const [isOpened, setIsOpened] = useState(false);
  const overlayRef = useRef(null);
  const timerId = useRef(0);

  const hideOverlay = () => {
    overlayRef.current.style.animationName = 'hide';
    setTimeout(() => setIsOpened(false), 250);
  }

  const openModal = () => {
    setIsOpened(true);
    timerId.current = setTimeout(hideOverlay, 5000);
  };

  const closeModal = evt => {
    if (evt.target === overlayRef.current) {
      hideOverlay();
      clearTimeout(timerId.current);
    }
  };

  return { isOpened, openModal, closeModal, overlayRef };
};

export default useOrderThank;
