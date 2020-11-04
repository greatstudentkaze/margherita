import { useState } from 'react';

const useChoice = () => {
  const [choice, setChoice] = useState('');

  const changeChoice = evt => {
    setChoice(evt.target.value);
  };

  return { choice, changeChoice };
};

export default useChoice;
