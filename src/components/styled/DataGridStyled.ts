import { styled } from '@mui/material';
import { CSSObject } from '@mui/material/styles';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';

export const DataGridStyled = styled(DataGrid)<DataGridProps>(
  ({ theme }): CSSObject => ({
    color: theme.palette.text.secondary,
    fontSize: '13px',
    width: '100%',
    border: 'none',
    '.MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '.MuiDataGrid-columnHeader': {
      textTransform: 'uppercase',
      backgroundColor: theme.palette.grey[100],
    },
    '.MuiDataGrid-columnHeaderTitle': {
      color: theme.palette.text.primary,
    },
    '.MuiDataGrid-footerContainer': {
      border: 'none',
    },
    '.MuiDataGrid-overlay': {
      fontSize: '16px',
      lineHeight: '18px',
      backgroundColor: 'transparent',
    },
    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, &.MuiDataGrid-root .MuiDataGrid-cell:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus-within':
      {
        outline: 'none',
      },
  }),
);
