import AddIcon from '@mui/icons-material/Add';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import ButtonCommon from '../../components/ButtonCommon';
import ModalCommon from '../../components/ModalCommon';
import PageCardCommon from '../../components/PageCardCommon';
import { useAlert } from '../../hooks';
import { selectAllOrders } from '../../store/models/orders/selectors';
import { useCreateOrder, useGetOrders } from './hooks';
import OrdersList from './orders-list/OrdersList';

const OrdersPage: FC = () => {
  const { t } = useTranslation();
  const { isAlertOpen, onOpenAlert } = useAlert();
  const getOrdersContext = useGetOrders({ onOpenAlert });
  const createOrderContext = useCreateOrder({ onOpenAlert });
  // const editClientContext = useEditClient(onOpenAlert);
  // const removeClientContext = useRemoveClient({ onOpenAlert });
  const orders = useSelector(selectAllOrders);
  const [isApiError, setIsApiError] = useState(false);

  useEffect(() => {
    const hasApiError =
      getOrdersContext.apiError || createOrderContext.apiError;
    // editClientContext.apiError ||
    // removeClientContext.apiError;
    setIsApiError(Boolean(hasApiError));
  }, [getOrdersContext.apiError, createOrderContext.apiError]);

  return (
    <>
      <PageCardCommon
        title={t('orders_title')}
        subtitle={t('manage_orders_subtitle')}
        buttonElement={
          <ButtonCommon
            children={t('add_order_button')}
            variant='contained'
            startIcon={<AddIcon />}
            onClick={createOrderContext.modal.onOpen}
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
      {/*Create Order*/}
      <ModalCommon
        isOpen={createOrderContext.modal.isOpen}
        onClose={createOrderContext.modal.onClose}
        content={null}
      />
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
