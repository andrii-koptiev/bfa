import { useEffect, useState } from 'react';

import { useAppDispatch } from '../../../store';

type GetOrdersProps = {
  onOpenAlert: () => void;
};

type GetOrdersReturnType = {
  apiError: string | null;
};

export const useGetOrders = ({
  onOpenAlert,
}: GetOrdersProps): GetOrdersReturnType => {
  const dispatch = useAppDispatch();
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    dispatch.orders.getOrders().catch((e: string) => {
      setApiError(e);
      onOpenAlert();
    });
  }, [dispatch.orders, onOpenAlert]);

  return { apiError };
};
