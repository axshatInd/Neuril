/* Node Modules */
import { useState, useCallback } from 'react';

/* A custom react hook for managing a toggle state */
/* @returns {[boolean, Function]} an array containing the current toggle state (boolean) and a function to toggle the state */
const useToggle = () => {
  const [isOpen, setToggle] = useState(false);

  const toggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return [isOpen, toggle];
};

export { useToggle };
