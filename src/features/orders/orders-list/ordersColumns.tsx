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
import { generatePath } from 'react-router-dom';

import { OrderMappedInterface } from '../../../interfaces';
import { ROUTES } from '../../../navigation/constants';
import { GRID_DATE_FORMAT } from '../../../utils';
import OrdersLinkColumn from './OrdersLinkColumn';

type OrdersColumnsArgs = {
  onEditOrder: (item: OrderMappedInterface) => void;
  onDeleteOrder: (item: OrderMappedInterface) => void;
  state: any;
  removeStringOperator?: (operator: string[]) => GridFilterOperator[];
  t: TFunction<any>;
};

export const ordersColumns = ({
  onEditOrder,
  onDeleteOrder,
  state,
  removeStringOperator,
  t,
}: OrdersColumnsArgs): GridColDef<OrderMappedInterface>[] => {
  const filterOperators = removeStringOperator
    ? removeStringOperator(['isAnyOf', 'isEmpty', 'isNotEmpty'])
    : getGridStringOperators();

  return [
    {
      field: 'orderNumber',
      headerName: t('orders_grid_order_number_column'),
      flex: 1,
      renderCell: (params) => {
        const path = generatePath(ROUTES.ORDERS, {
          id: String(params.row.orderNumber),
        });

        return <OrdersLinkColumn row={params.row} route={path} state={state} />;
      },
      filterOperators,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'storeName',
      headerName: t('orders_grid_store_name_column'),
      flex: 0.5,
      filterOperators,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'totalAmountCurrency',
      headerName: t('orders_grid_total_amount_currency_column'),
      filterOperators,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'currency',
      headerName: t('orders_grid_currency_column'),
      filterOperators,
      flex: 0.5,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'orderCurrencyRate',
      headerName: t('orders_grid_order_currency_rate_column'),
      filterOperators,
      type: 'number',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'clientCurrencyRate',
      headerName: t('orders_grid_client_currency_rate_column'),
      filterOperators,
      type: 'number',
      flex: 0.5,
      headerAlign: 'center',
      align: 'center',
    },

    {
      field: 'totalAmountUAH',
      headerName: t('orders_grid_total_amount_UAH_column'),
      filterOperators,
      type: 'number',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'profit',
      headerName: t('orders_grid_profit_column'),
      filterOperators,
      type: 'number',
      flex: 0.5,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'createdAt',
      headerName: t('grid_date_column'),
      filterOperators,
      flex: 0.5,
      headerAlign: 'center',
      align: 'center',
      type: 'date',
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
            onEditOrder(row);
            e.preventDefault();
          }}
          label='vvv'
        />,
        <GridActionsCellItem
          icon={<DeleteOutlineOutlinedIcon />}
          data-testid='list-delete-button'
          onClick={(e) => {
            onDeleteOrder(row);
            e.preventDefault();
          }}
          label={'vvv'}
        />,
      ],
    },
  ];
};
