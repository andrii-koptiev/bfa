import { useEffect, useState } from 'react';

import { useAppDispatch } from '../../../store';

type GetClientsReturnType = {
  apiError: string | null;
};

export const useGetClients = (
  onOpenAlert: () => void,
): GetClientsReturnType => {
  const dispatch = useAppDispatch();
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    dispatch.clients.getClients().catch((e: string) => {
      setApiError(e);
      onOpenAlert();
    });
  }, [dispatch.clients, onOpenAlert]);

  return { apiError };
};
