import React, { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import DataGridCommon from '../../../components/DataGridCommon';
import { useDataGridFilter, useLocalSearch } from '../../../hooks';
import { OrderMappedInterface } from '../../../interfaces';
import { ordersColumns } from './ordersColumns';

type Props = {
  orders: OrderMappedInterface[];
  onEditOrder: (orderData: OrderMappedInterface) => void;
  onDeleteOrder: (orderData: OrderMappedInterface) => void;
};

const OrdersList: FC<Props> = ({ orders, onEditOrder, onDeleteOrder }) => {
  const searchByKeys = ['orderNumber', 'storeName'];

  const {
    setSearchQuery,
    searchResult,
    searchQuery,
    isInputTouched,
    setIsInputTouched,
  } = useLocalSearch<OrderMappedInterface>(orders, searchByKeys);
  const { removeStringOperator } = useDataGridFilter();
  const { state } = useLocation();
  const { t } = useTranslation();

  const columns = useMemo(() => {
    return ordersColumns({
      onEditOrder,
      onDeleteOrder,
      state,
      removeStringOperator,
      t,
    });
  }, [onEditOrder, onDeleteOrder, state, removeStringOperator, t]);

  const handleSearch = useCallback(
    (value: string) => {
      setSearchQuery(value);
    },
    [setSearchQuery],
  );

  return (
    <DataGridCommon
      rows={searchQuery ? searchResult : orders}
      columns={columns}
      onSearch={handleSearch}
      searchPlaceholder={t('orders_search_placeholder')}
      searchQuery={searchQuery}
      isInputTouched={isInputTouched}
      onInputTouched={setIsInputTouched}
    />
  );
};

export default OrdersList;
