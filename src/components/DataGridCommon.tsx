import { GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import PaginationCommon from './PaginationCommon';
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
  pageSizeOptions = [10],
  paginationModel = { pageSize: 10, page: 0 },
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
      autoHeight={true}
      rows={rows}
      rowHeight={44}
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
        pagination: PaginationCommon,
      }}
      initialState={{
        pagination: { paginationModel },
        sorting: {
          sortModel: [{ field: 'updatedAt', sort: 'desc' }],
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
