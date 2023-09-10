import { useState } from 'react';

export const useAlert = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onOpenAlert = () => {
    setIsAlertOpen(true);

    setTimeout(() => {
      onCloseAlert();
    }, 2000);
  };

  const onCloseAlert = () => {
    setIsAlertOpen(false);
  };

  return {
    isAlertOpen,
    onOpenAlert,
    onCloseAlert,
  };
};
