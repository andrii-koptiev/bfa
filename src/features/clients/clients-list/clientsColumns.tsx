import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { getGridStringOperators, GridActionsCellItem, GridColDef, GridFilterOperator } from "@mui/x-data-grid";

import { ClientMappedInterface } from "../../../interfaces";
import ClientsLinkColumn from "./ClientsLinkColumn";

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
      field: "city","phone"headerName: "Місто","Телефон"lueGetter: ({ row }) => row.city,
      filterOperators,
      flex: 1,
    },
   {
      field: "actions",
      type: "actions",
      getActions: ({ row }) => [
        <GridActionsCellItem
          icon={<ModeEditOutlineOutlinedIcon />}
          data-testid="list-edit-button"
          onClick={(e) => {
            onEditItem(row);
            e.preventDefault();
          }}
          label={"vvv"}
        />,
        <GridActionsCellItem
          icon={<DeleteOutlineOutlinedIcon />}
          data-testid="list-delete-button"
          onClick={(e) => {
            onDeleteItem(row);
            e.preventDefault();
          }}
          label={"sss"}
        />
      ],
    },
  ];
};