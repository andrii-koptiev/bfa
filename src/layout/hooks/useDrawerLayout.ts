import { useState } from 'react';

export const useDrawerLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  return {
    isOpen,
    handleToggleMenu,
  };
};
