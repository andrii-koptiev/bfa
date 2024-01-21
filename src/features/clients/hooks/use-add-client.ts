import { useCallback, useState } from 'react';

import { useModal } from '../../../hooks';
import { CreateClientPayloadInterface } from '../../../interfaces';
import { useAppDispatch } from '../../../store';
import { AddEditClientFormValuesInterface } from '../interfaces';

type AddClientReturnType = {
  modal: ReturnType<typeof useModal>;
  handleSubmit: (item: AddEditClientFormValuesInterface) => void;
  apiError: string | null;
};

export const useAddClient = (onOpenAlert: () => void): AddClientReturnType => {
  const dispatch = useAppDispatch();
  const modal = useModal();
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (clientsData: AddEditClientFormValuesInterface) => {
      setApiError(null);

      const payload: CreateClientPayloadInterface = {
        requestBody: {
          ...clientsData,
        },
      };

      await dispatch.clients
        .createClient(payload)
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
    [dispatch.clients, modal, onOpenAlert],
  );

  return { modal, handleSubmit, apiError };
};
