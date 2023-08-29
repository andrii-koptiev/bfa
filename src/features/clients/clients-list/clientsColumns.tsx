import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {
  GridActionsCellItem,
  GridColDef,
  GridFilterOperator,
  getGridStringOperators,
} from '@mui/x-data-grid';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { ClientMappedInterface } from '../../../interfaces';
import ClientsLinkColumn from './ClientsLinkColumn';

type ClientsColumnsArgs = {
  onEditItem: (item: ClientMappedInterface) => void;
  onDeleteItem: (item: ClientMappedInterface) => void;
  state: any;
  removeStringOperator?: (operator: string[]) => GridFilterOperator[];
  t: TFunction<any>;
};

export const clientsColumns = ({
  onEditItem,
  onDeleteItem,
  state,
  removeStringOperator,
  t,
}: ClientsColumnsArgs): GridColDef<ClientMappedInterface>[] => {
  const filterOperators = removeStringOperator
    ? removeStringOperator(['isAnyOf', 'isEmpty', 'isNotEmpty'])
    : getGridStringOperators();

  return [
    {
      field: 'name',
      headerName: t('grid_name_column'),
      flex: 1,
      renderCell: ({ row }) => (
        <ClientsLinkColumn row={row} route={'/aaa'} state={state} />
      ),
      filterOperators,
    },
    {
      field: 'phone',
      headerName: t('grid_phone_column'),
      flex: 1,
      filterOperators,
      valueGetter: ({ row }) => row.phone,
    },
    {
      field: 'city',
      headerName: t('grid_city_column'),
      filterOperators,
      flex: 1,
    },
    {
      field: 'actions',
      type: 'actions',
      getActions: ({ row }) => [
        <GridActionsCellItem
          icon={<ModeEditOutlineOutlinedIcon />}
          data-testid='list-edit-button'
          onClick={(e) => {
            onEditItem(row);
            e.preventDefault();
          }}
          label='vvv'
        />,
        <GridActionsCellItem
          icon={<DeleteOutlineOutlinedIcon />}
          data-testid='list-delete-button'
          onClick={(e) => {
            onDeleteItem(row);
            e.preventDefault();
          }}
          label={'vvv'}
        />,
      ],
    },
  ];
};
