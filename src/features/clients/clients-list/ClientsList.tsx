import React, { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import DataGridCommon from '../../../components/DataGridCommon';
import { useDataGridFilter, useLocalSearch } from '../../../hooks';
import { ClientMappedInterface } from '../../../interfaces';
import { clientsColumns } from './clientsColumns';

type Props = {
  items: ClientMappedInterface[];
  onEditItem: (item: ClientMappedInterface) => void;
  onDeleteItem: (item: ClientMappedInterface) => void;
};

const ClientsList: FC<Props> = ({ items, onDeleteItem, onEditItem }) => {
  const searchByKeys = ['name', 'phone'];

  const {
    setSearchQuery,
    searchResult,
    searchQuery,
    isInputTouched,
    setIsInputTouched,
  } = useLocalSearch<ClientMappedInterface>(items, searchByKeys);
  const { removeStringOperator } = useDataGridFilter();
  const { state } = useLocation();
  const { t } = useTranslation();

  const columns = useMemo(() => {
    return clientsColumns({
      onEditItem,
      onDeleteItem,
      state,
      removeStringOperator,
      t,
    });
  }, [onEditItem, onDeleteItem, state, removeStringOperator, t]);

  const handleSearch = useCallback(
    (value: string) => {
      setSearchQuery(value);
    },
    [setSearchQuery],
  );

  return (
    <DataGridCommon
      rows={searchQuery ? searchResult : items}
      columns={columns}
      onSearch={handleSearch}
      searchPlaceholder={t('clients_search_placeholder')}
      searchQuery={searchQuery}
      isInputTouched={isInputTouched}
      onInputTouched={setIsInputTouched}
    />
  );
};

export default memo(ClientsList);
