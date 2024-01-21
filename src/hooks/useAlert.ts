import { useCallback, useState } from 'react';

import { ALERT_TIME_MS } from '../utils';

export const useAlert = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onOpenAlert = useCallback(() => {
    setIsAlertOpen(true);

    setTimeout(() => {
      onCloseAlert();
    }, ALERT_TIME_MS);
  }, []);

  const onCloseAlert = () => {
    setIsAlertOpen(false);
  };

  return {
    isAlertOpen,
    onOpenAlert,
    onCloseAlert,
  };
};
