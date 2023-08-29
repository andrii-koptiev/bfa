import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import ButtonCommon from '../../components/ButtonCommon';
import PageCardCommon from '../../components/PageCardCommon';
import { useAppDispatch } from '../../store';
import { selectAllClients } from '../../store/models/clients/selectors';
import ClientsList from './clients-list/ClientsList';

const ClientsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const clients = useSelector(selectAllClients);
  useEffect(() => {
    dispatch.clients.getClients();
  }, [dispatch.clients]);

  return (
    <PageCardCommon
      title={t('clients_title')}
      subtitle={t('manage_clients_subtitle')}
      buttonElement={
        <ButtonCommon
          children={t('add_client_button')}
          variant='contained'
          startIcon={<PersonAddAlt1OutlinedIcon />}
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
  );
};

export default ClientsPage;
