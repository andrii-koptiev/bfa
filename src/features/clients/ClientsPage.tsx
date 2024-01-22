import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import AlertCommon from '../../components/AlertCommon';
import ButtonCommon from '../../components/ButtonCommon';
import ConfirmationDialogCommon from '../../components/ConfirmationDialogCommon';
import ModalCommon from '../../components/ModalCommon';
import PageCardCommon from '../../components/PageCardCommon';
import { useAlert } from '../../hooks';
import { selectAllClients } from '../../store/models/clients/selectors';
import ClientsList from './clients-list/ClientsList';
import {
  useAddClient,
  useEditClient,
  useGetClients,
  useRemoveClient,
} from './hooks';
import AddEditClientForm from './manage-clients/AddEditClientForm';

const ClientsPage: FC = () => {
  const { t } = useTranslation();
  const { isAlertOpen, onOpenAlert } = useAlert();
  const addClientContext = useAddClient(onOpenAlert);
  const getClientsContext = useGetClients(onOpenAlert);
  const editClientContext = useEditClient(onOpenAlert);
  const removeClientContext = useRemoveClient({ onOpenAlert });
  const clients = useSelector(selectAllClients);
  const [isApiError, setIsApiError] = useState(false);

  useEffect(() => {
    const hasApiError =
      getClientsContext.apiError ||
      addClientContext.apiError ||
      editClientContext.apiError ||
      removeClientContext.apiError;
    setIsApiError(Boolean(hasApiError));
  }, [
    addClientContext.apiError,
    editClientContext.apiError,
    getClientsContext.apiError,
    removeClientContext.apiError,
  ]);

  return (
    <>
      <PageCardCommon
        title={t('clients_title')}
        subtitle={t('manage_clients_subtitle')}
        buttonElement={
          <ButtonCommon
            children={t('add_client_button')}
            variant='contained'
            startIcon={<PersonAddAlt1OutlinedIcon />}
            onClick={addClientContext.modal.onOpen}
          />
        }
        contentElement={
          <ClientsList
            items={clients}
            onEditClient={editClientContext.handleEditClient}
            onDeleteClient={removeClientContext.handleRemoveClient}
          />
        }
      />
      {/*Create Client*/}
      <ModalCommon
        isOpen={addClientContext.modal.isOpen}
        onClose={addClientContext.modal.onClose}
        content={
          <AddEditClientForm
            clientsList={clients}
            onSubmitForm={addClientContext.handleSubmit}
            onCancel={addClientContext.modal.onClose}
          />
        }
      />
      {/*Edit Client*/}
      <ModalCommon
        isOpen={editClientContext.modal.isOpen}
        onClose={editClientContext.modal.onClose}
        content={
          <AddEditClientForm
            client={editClientContext.editedClient}
            clientsList={clients}
            onSubmitForm={editClientContext.handleSubmit}
            onCancel={editClientContext.modal.onClose}
          />
        }
      />
      {/*Remove Client*/}
      <ModalCommon
        isOpen={removeClientContext.modal.isOpen}
        onClose={removeClientContext.modal.onClose}
        content={
          <ConfirmationDialogCommon
            title={t('common_confirm_dialog_title')}
            confirmText={removeClientContext.confirmDialogText}
            confirmButtonText={t('confirm_button_text')}
            cancelButtonText={t('common_cancel')}
            onConfirm={removeClientContext.handleSubmit}
            onCancel={removeClientContext.modal.onClose}
          />
        }
      />
      {isAlertOpen && (
        <AlertCommon
          color={isApiError ? 'error' : 'success'}
          text={isApiError ? t('common_api_error') : t('alert_success')}
        />
      )}
    </>
  );
};

export default ClientsPage;
