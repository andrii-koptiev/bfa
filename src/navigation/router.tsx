import { createBrowserRouter } from 'react-router-dom';

import ClientsPage from '../features/clients/ClientsPage';
import OrdersPage from '../features/orders/OrdersPage';
import Layout from '../layout/Layout';
import { ROUTES } from './constants';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTES.CLIENTS,
        element: <ClientsPage />,
      },
      {
        path: ROUTES.ORDERS,
        element: <OrdersPage />,
      },
    ],
  },
]);
