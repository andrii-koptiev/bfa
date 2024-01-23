import { Box } from '@mui/material';
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import SearchCommon from './SearchCommon';
import { DataGridStyled } from './styled';

type Props = {
  columns: GridColDef[];
  rows: any[];
  searchQuery: string;
  onSearch: (value: string) => void;
  isInputTouched: boolean;
  onInputTouched: (value: boolean) => void;
  searchPlaceholder?: string;
  pageSizeOptions?: number[];
  paginationModel?: GridPaginationModel;
  disableColumnSelector?: boolean;
  disableRowSelectionOnClick?: boolean;
  checkboxSelection?: boolean;
};

const DataGridCommon: FC<Props> = ({
  columns,
  rows,
  pageSizeOptions = [10, 15, 25, 50, 100],
  paginationModel = { pageSize: 15, page: 0 },
  disableColumnSelector = true,
  disableRowSelectionOnClick = true,
  checkboxSelection = false,
  onSearch,
  searchPlaceholder,
  searchQuery = '',
  isInputTouched = false,
  onInputTouched,
}) => {
  const { t } = useTranslation();
  return (
    <DataGridStyled
      rows={rows}
      rowHeight={38}
      columns={columns}
      slots={{
        toolbar: () =>
          onSearch ? (
            <SearchCommon
              onSearch={onSearch}
              searchPlaceholder={searchPlaceholder}
              searchQuery={searchQuery}
              isInputTouched={isInputTouched}
              onInputTouched={onInputTouched}
            />
          ) : null,
      }}
      initialState={{
        pagination: { paginationModel },
        sorting: {
          sortModel: [{ field: 'createdAt', sort: 'desc' }],
        },
      }}
      disableColumnSelector={disableColumnSelector}
      pageSizeOptions={pageSizeOptions}
      disableRowSelectionOnClick={disableRowSelectionOnClick}
      checkboxSelection={checkboxSelection}
      localeText={{ noRowsLabel: t('empty_data_grid') }}
      disableColumnMenu
    />
  );
};

export default memo(DataGridCommon);
