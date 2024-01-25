import { useCallback, useState } from 'react';

import { useModal } from '../../../hooks';
import { CreateOrderPayloadInterface } from '../../../interfaces';
import { useAppDispatch } from '../../../store';
import { CreateEditOrderFormValuesInterface } from '../interfaces';

type CreateOrderProps = {
  onOpenAlert: () => void;
};

type CreateOrderReturnType = {
  modal: ReturnType<typeof useModal>;
  handleSubmit: (item: CreateEditOrderFormValuesInterface) => void;
  apiError: string | null;
};

export const useCreateOrder = ({
  onOpenAlert,
}: CreateOrderProps): CreateOrderReturnType => {
  const dispatch = useAppDispatch();
  const modal = useModal();
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (orderData: CreateEditOrderFormValuesInterface) => {
      setApiError(null);

      const payload: CreateOrderPayloadInterface = {
        requestBody: {
          ...orderData,
          totalAmountCurrency: null,
          totalAmountUAH: null,
          profit: null,
          createdAt: new Date().toISOString(),
        },
      };

      await dispatch.orders
        .createOrder(payload)
        .then(() => {
          modal.onClose();
          onOpenAlert();
        })
        .catch((e: string) => {
          modal.onClose();
          setApiError(e);
          onOpenAlert();
        });
    },
    [dispatch.orders, modal, onOpenAlert],
  );

  return { modal, handleSubmit, apiError };
};
