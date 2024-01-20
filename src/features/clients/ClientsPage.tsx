import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import AlertCommon from '../../components/AlertCommon';
import ButtonCommon from '../../components/ButtonCommon';
import ModalCommon from '../../components/ModalCommon';
import PageCardCommon from '../../components/PageCardCommon';
import { useAlert } from '../../hooks';
import { useAppDispatch } from '../../store';
import { selectAllClients } from '../../store/models/clients/selectors';
import ClientsList from './clients-list/ClientsList';
import { useAddClient } from './hooks';
import AddEditClientForm from './manage-clients/AddEditClientForm';

const ClientsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { isAlertOpen, onOpenAlert } = useAlert();
  const addClientContext = useAddClient(onOpenAlert);
  const clients = useSelector(selectAllClients);
  const [isApiError, setIsApiError] = useState(false);

  useEffect(() => {
    dispatch.clients.getClients();
  }, [dispatch.clients]);

  useEffect(() => {
    addClientContext.apiError && setIsApiError(true);
  }, [addClientContext.apiError]);

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
            onEditItem={() => {}}
            onDeleteItem={() => {}}
          />
        }
      />
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
      {isAlertOpen && (
        <AlertCommon
          color={isApiError ? 'error' : 'success'}
          text={
            isApiError ? t('common_api_error') : t('alert_success_added_client')
          }
        />
      )}
    </>
  );
};

export default ClientsPage;
