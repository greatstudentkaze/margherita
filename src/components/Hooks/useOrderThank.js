import { useState } from 'react';

const useOrderThank = () => {
  const [isOrderThankOpened, setIsOrderThankOpened] = useState(false);

  const openOrderThank = () => {
    setIsOrderThankOpened(true);
    setTimeout(() => setIsOrderThankOpened(false), 5000);
  };

  const closeOrderThank = evt => {
    if (!evt.target.classList.contains('overlay')) {
      return;
    }

    evt.target.style.animationName = 'hide';
    setTimeout(() => setIsOrderThankOpened(false), 250);
  };

  return { isOrderThankOpened, openOrderThank, closeOrderThank };
};

export default useOrderThank;
