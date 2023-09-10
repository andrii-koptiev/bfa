import { useCallback, useState } from 'react';

import { useModal } from '../../../hooks';
import { CreateClientPayloadInterface } from '../../../interfaces';
import { useAppDispatch } from '../../../store';
import { AddEditClientFormValuesInterface } from '../interfaces';

type AddClientReturnType = {
  modal: ReturnType<typeof useModal>;
  handleSubmit: (item: AddEditClientFormValuesInterface) => void;
  apiError: string | undefined;
};

export const useAddClient = (onOpenAlert: () => void): AddClientReturnType => {
  const dispatch = useAppDispatch();
  const modal = useModal();
  const [apiError, setApiError] = useState<string>();

  const handleSubmit = useCallback(
    async (clientsData: AddEditClientFormValuesInterface) => {
      setApiError('');

      const payload: CreateClientPayloadInterface = {
        requestBody: {
          ...clientsData,
        },
      };

      await dispatch.clients.createClient(payload);
      try {
        modal.onClose();
        onOpenAlert();
      } catch (e: any) {
        console.log('error in hook', e);
      }
    },
    [dispatch.clients, modal, onOpenAlert],
  );

  return { modal, handleSubmit, apiError };
};