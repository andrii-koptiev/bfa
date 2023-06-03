import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SummarizeIcon from '@mui/icons-material/Summarize';

import { ROUTES } from '../navigation/constants';

export const menuData = [
  {
    id: 1,
    name: 'Клієнти',
    route: ROUTES.CLIENTS,
    icon: GroupOutlinedIcon,
  },
  {
    name: 'Замовлення',
    icon: ShoppingCartIcon,
    route: ROUTES.CLIENTS,
    id: 2,
  },
  {
    name: 'Оплати',
    icon: AttachMoneyIcon,
    route: ROUTES.CLIENTS,
    id: 3,
  },
  {
    name: 'Звіти',
    icon: SummarizeIcon,
    route: ROUTES.CLIENTS,
    id: 4,
  },
];
