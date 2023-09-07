import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import ButtonCommon from '../../components/ButtonCommon';
import ModalCommon from '../../components/ModalCommon';
import PageCardCommon from '../../components/PageCardCommon';
import { useModal } from '../../hooks';
import { useAppDispatch } from '../../store';
import { selectAllClients } from '../../store/models/clients/selectors';
import ClientsList from './clients-list/ClientsList';
import AddEditClientForm from './manage-clients/AddEditClientForm';

const ClientsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { onOpen, isOpen, onClose } = useModal();

  const clients = useSelector(selectAllClients);
  useEffect(() => {
    dispatch.clients.getClients();
  }, [dispatch.clients]);

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
            onClick={onOpen}
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
        isOpen={isOpen}
        onClose={onClose}
        content={
          <AddEditClientForm clientsList={clients} onSubmitForm={() => {}} />
        }
      />
    </>
  );
};

export default ClientsPage;
