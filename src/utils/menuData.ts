import { SvgIconComponent } from '@mui/icons-material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SummarizeIcon from '@mui/icons-material/Summarize';

import { ROUTES } from '../navigation/constants';

interface MenuData {
  id: number;
  keyName: string;
  route: string;
  icon: SvgIconComponent;
}

export const menuData: MenuData[] = [
  {
    id: 1,
    keyName: 'clients_menu',
    route: ROUTES.CLIENTS,
    icon: GroupOutlinedIcon,
  },
  {
    id: 2,
    keyName: 'orders_menu',
    route: ROUTES.ORDERS,
    icon: ShoppingCartIcon,
  },
  {
    keyName: 'payments_menu',
    icon: AttachMoneyIcon,
    route: '',
    id: 3,
  },
  {
    keyName: 'reports_menu',
    icon: SummarizeIcon,
    route: '',
    id: 4,
  },
];
