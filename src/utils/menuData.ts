import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SummarizeIcon from '@mui/icons-material/Summarize';

import { ROUTES } from '../navigation/constants';

export const menuData = [
  {
    id: 1,
    keyName: 'clients',
    route: ROUTES.CLIENTS,
    icon: GroupOutlinedIcon,
  },
  {
    keyName: 'orders',
    icon: ShoppingCartIcon,
    route: '',
    id: 2,
  },
  {
    keyName: 'payments',
    icon: AttachMoneyIcon,
    route: '',
    id: 3,
  },
  {
    keyName: 'reports',
    icon: SummarizeIcon,
    route: '',
    id: 4,
  },
];
