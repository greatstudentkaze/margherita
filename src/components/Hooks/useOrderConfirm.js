import { useState } from 'react';

const useOrderConfirm = () => {
  const [isOrderConfirmOpened, setIsOrderConfirmOpened] = useState(false);

  return { isOrderConfirmOpened, setIsOrderConfirmOpened };
};

export default useOrderConfirm;
