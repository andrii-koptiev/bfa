import { useEffect, useState } from 'react';

import { useAppDispatch } from '../../../store';

type GetClientsReturnType = {
  apiError: string | null;
};

export const useGetStores = (): GetClientsReturnType => {
  const dispatch = useAppDispatch();
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    dispatch.stores.getStores().catch((e: string) => {
      setApiError(e);
    });
  }, [dispatch.stores]);

  return { apiError };
};
