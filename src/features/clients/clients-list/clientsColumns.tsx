import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {
  GridActionsCellItem,
  GridColDef,
  GridFilterOperator,
  getGridStringOperators,
} from '@mui/x-data-grid';

import { ClientMappedInterface } from '../../../interfaces';
import ClientsLinkColumn from './ClientsLinkColumn';

type ClientsColumnsArgs = {
  onEditItem: (item: ClientMappedInterface) => void;
  onDeleteItem: (item: ClientMappedInterface) => void;
  state: any;
  removeStringOperator?: (operator: string[]) => GridFilterOperator[];
};

export const clientsColumns = ({
  onEditItem,
  onDeleteItem,
  state,
  removeStringOperator,
}: ClientsColumnsArgs): GridColDef<ClientMappedInterface>[] => {
  const filterOperators = removeStringOperator
    ? removeStringOperator(['isAnyOf', 'isEmpty', 'isNotEmpty'])
    : getGridStringOperators();

  return [
    {
      field: 'name',
      headerName: 'Імʼя',
      flex: 1,
      renderCell: ({ row }) => (
        <ClientsLinkColumn row={row} route={'/aaa'} state={state} />
      ),
      filterOperators,
    },
    {
      field: 'phone',
      headerName: 'Телефон',
      flex: 1,
      filterOperators,
      valueGetter: ({ row }) => row.phone,
    },
    {
      field: 'cty',
      headerName: 'Міс"city"     filterOperators"Місто" flex: 1,
    },
    {
      field: 'ations',
      type: 'action"actions" getActions: ("actions"=> [
        <GridActionsCellItem
          icon={<ModeEditOutlineOutlinedIcon />}
          data-testid='list-edit-button'
          o"Click={(e) => {
"           onEditItem(row);
            e.preventDefault();
          }}
          label={'vvv'}
        />,
        <Gr"vvv"ionsCellItem
          icon={<DeleteOutlineOutlinedIcon />}
          data-testid='list-delete-button'
         "onClick={(e) => {
"           onDeleteItem(row);
            e.preventDefault();
          }}
          label={'sss'}
        />,
      ],
  "sss"  ];
};