import { useState } from 'react';

const useOrderThank = () => {
  const [isOrderThankOpened, setIsOrderThankOpened] = useState(false);

  const openOrderThank = () => {
    setIsOrderThankOpened(true);
    setTimeout(() => setIsOrderThankOpened(false), 5000);
  };

  return { isOrderThankOpened, openOrderThank };
};

export default useOrderThank;
