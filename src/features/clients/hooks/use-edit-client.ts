import { useCallback, useState } from 'react';

import { useModal } from '../../../hooks';
import {
  ClientMappedInterface,
  EditClientPayloadInterface,
} from '../../../interfaces';
import { useAppDispatch } from '../../../store';
import { EditClientFormValuesInterface } from '../interfaces';

type EditClientReturnType = {
  modal: ReturnType<typeof useModal>;
  handleSubmit: (item: EditClientFormValuesInterface) => void;
  apiError: string | null;
  editedClient: ClientMappedInterface | null;
  handleEditClient: (clientData: ClientMappedInterface) => void;
};

export const useEditClient = (
  onOpenAlert: () => void,
): EditClientReturnType => {
  const dispatch = useAppDispatch();
  const modal = useModal();
  const [apiError, setApiError] = useState<string | null>(null);
  const [editedClient, setEditedClient] =
    useState<ClientMappedInterface | null>(null);

  const handleEditClient = (clientData: ClientMappedInterface) => {
    setEditedClient(clientData);
    modal.onOpen();
  };

  const handleSubmit = useCallback(
    async (clientData: EditClientFormValuesInterface) => {
      if (!editedClient || !editedClient.id) {
        return;
      }
      setApiError(null);

      const payload: EditClientPayloadInterface = {
        requestBody: {
          ...clientData,
          id: editedClient.id,
        },
      };

      await dispatch.clients
        .editClient(payload)
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
    [dispatch.clients, editedClient, modal, onOpenAlert],
  );

  return { modal, handleSubmit, apiError, editedClient, handleEditClient };
};
