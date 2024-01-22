import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useModal } from '../../../hooks';
import { ClientMappedInterface } from '../../../interfaces';
import { useAppDispatch } from '../../../store';

type RemoveClientProps = {
  onOpenAlert: () => void;
};
type removeClientReturnType = {
  modal: ReturnType<typeof useModal>;
  handleSubmit: () => void;
  confirmDialogText: string;
  apiError: string | null;
  deletedClient: ClientMappedInterface | null;
  handleRemoveClient: (clientData: ClientMappedInterface) => void;
};

export const useRemoveClient = ({
  onOpenAlert,
}: RemoveClientProps): removeClientReturnType => {
  const dispatch = useAppDispatch();
  const modal = useModal();
  const { t } = useTranslation();
  const [apiError, setApiError] = useState<string | null>(null);
  const [deletedClient, setDeletedClient] =
    useState<ClientMappedInterface | null>(null);
  const [confirmDialogText, setConfirmDialogText] = useState('');

  useEffect(() => {
    setConfirmDialogText(
      `${t('common_confirm_dialog_text')} ${deletedClient?.name}?`,
    );
  }, [deletedClient?.name, t]);

  const handleRemoveClient = (clientData: ClientMappedInterface) => {
    setDeletedClient(clientData);
    modal.onOpen();
  };

  const handleSubmit = useCallback(async () => {
    if (!deletedClient) {
      return;
    }
    setApiError(null);

    await dispatch.clients
      .removeClient(deletedClient.id)
      .then(() => {
        modal.onClose();
        onOpenAlert();
      })
      .catch((e: string) => {
        modal.onClose();
        setApiError(e);
        onOpenAlert();
      });
  }, [deletedClient, dispatch.clients, modal, onOpenAlert]);

  return {
    modal,
    handleSubmit,
    apiError,
    deletedClient,
    handleRemoveClient,
    confirmDialogText,
  };
};
