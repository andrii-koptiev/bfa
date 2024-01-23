import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import ButtonCommon from '../../components/ButtonCommon';
import PageCardCommon from '../../components/PageCardCommon';
import { useAlert } from '../../hooks';
import { selectAllOrders } from '../../store/models/orders/selectors';
import { useGetOrders } from './hooks';
import OrdersList from './orders-list/OrdersList';

const OrdersPage: FC = () => {
  const { t } = useTranslation();
  const { isAlertOpen, onOpenAlert } = useAlert();
  // const addClientContext = useAddClient(onOpenAlert);
  const getOrdersContext = useGetOrders({ onOpenAlert });
  // const editClientContext = useEditClient(onOpenAlert);
  // const removeClientContext = useRemoveClient({ onOpenAlert });
  const orders = useSelector(selectAllOrders);
  const [isApiError, setIsApiError] = useState(false);

  // useEffect(() => {
  //   const hasApiError =
  //     getClientsContext.apiError ||
  //     addClientContext.apiError ||
  //     editClientContext.apiError ||
  //     removeClientContext.apiError;
  //   setIsApiError(Boolean(hasApiError));
  // }, [
  //   addClientContext.apiError,
  //   editClientContext.apiError,
  //   getClientsContext.apiError,
  //   removeClientContext.apiError,
  // ]);

  return (
    <>
      <PageCardCommon
        title={t('orders_title')}
        subtitle={t('manage_orders_subtitle')}
        buttonElement={
          <ButtonCommon
            children={t('add_order_button')}
            variant='contained'
            startIcon={<PersonAddAlt1OutlinedIcon />}
            onClick={() => {}}
          />
        }
        contentElement={
          <OrdersList
            orders={orders}
            onEditOrder={() => {}}
            onDeleteOrder={() => {}}
          />
        }
      />
      {/*/!*Create Client*!/*/}
      {/*<ModalCommon*/}
      {/*  isOpen={addClientContext.modal.isOpen}*/}
      {/*  onClose={addClientContext.modal.onClose}*/}
      {/*  content={*/}
      {/*    <AddEditClientForm*/}
      {/*      clientsList={clients}*/}
      {/*      onSubmitForm={addClientContext.handleSubmit}*/}
      {/*      onCancel={addClientContext.modal.onClose}*/}
      {/*    />*/}
      {/*  }*/}
      {/*/>*/}
      {/*/!*Edit Client*!/*/}
      {/*<ModalCommon*/}
      {/*  isOpen={editClientContext.modal.isOpen}*/}
      {/*  onClose={editClientContext.modal.onClose}*/}
      {/*  content={*/}
      {/*    <AddEditClientForm*/}
      {/*      client={editClientContext.editedClient}*/}
      {/*      clientsList={clients}*/}
      {/*      onSubmitForm={editClientContext.handleSubmit}*/}
      {/*      onCancel={editClientContext.modal.onClose}*/}
      {/*    />*/}
      {/*  }*/}
      {/*/>*/}
      {/*/!*Remove Client*!/*/}
      {/*<ModalCommon*/}
      {/*  isOpen={removeClientContext.modal.isOpen}*/}
      {/*  onClose={removeClientContext.modal.onClose}*/}
      {/*  content={*/}
      {/*    <ConfirmationDialogCommon*/}
      {/*      title={t('common_confirm_dialog_title')}*/}
      {/*      confirmText={removeClientContext.confirmDialogText}*/}
      {/*      confirmButtonText={t('confirm_button_text')}*/}
      {/*      cancelButtonText={t('common_cancel')}*/}
      {/*      onConfirm={removeClientContext.handleSubmit}*/}
      {/*      onCancel={removeClientContext.modal.onClose}*/}
      {/*    />*/}
      {/*  }*/}
      {/*/>*/}
      {/*{isAlertOpen && (*/}
      {/*  <AlertCommon*/}
      {/*    color={isApiError ? 'error' : 'success'}*/}
      {/*    text={isApiError ? t('common_api_error') : t('alert_success')}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  );
};

export default OrdersPage;
