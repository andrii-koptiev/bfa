import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {
  GridActionsCellItem,
  GridColDef,
  GridFilterOperator,
  getGridStringOperators,
} from '@mui/x-data-grid';
import { TFunction } from 'i18next';
import moment from 'moment';

import { ClientMappedInterface } from '../../../interfaces';
import { GRID_DATE_FORMAT } from '../../../utils';
import ClientsLinkColumn from './ClientsLinkColumn';

type ClientsColumnsArgs = {
  onEditClient: (item: ClientMappedInterface) => void;
  onDeleteClient: (item: ClientMappedInterface) => void;
  state: any;
  removeStringOperator?: (operator: string[]) => GridFilterOperator[];
  t: TFunction<any>;
};

export const clientsColumns = ({
  onEditClient,
  onDeleteClient,
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
      headerName: t('grid_address_column'),
      filterOperators,
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: t('grid_date_column'),
      filterOperators,
      flex: 1,
      valueGetter: (params) => new Date(params.row.createdAt),
      valueFormatter: (params) =>
        moment(params?.value).format(GRID_DATE_FORMAT),
    },
    {
      field: 'actions',
      type: 'actions',
      getActions: ({ row }) => [
        <GridActionsCellItem
          icon={<ModeEditOutlineOutlinedIcon />}
          data-testid='list-edit-button'
          onClick={(e) => {
            onEditClient(row);
            e.preventDefault();
          }}
          label='vvv'
        />,
        <GridActionsCellItem
          icon={<DeleteOutlineOutlinedIcon />}
          data-testid='list-delete-button'
          onClick={(e) => {
            onDeleteClient(row);
            e.preventDefault();
          }}
          label={'vvv'}
        />,
      ],
    },
  ];
};
