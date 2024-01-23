import { Models } from '@rematch/core';

import { clientsModel } from './clients/clients.model';
import { ordersModel } from './orders/orders.model';

export interface RootModel extends Models<RootModel> {
  clients: typeof clientsModel;
  orders: typeof ordersModel;
}
export const models: RootModel = {
  clients: clientsModel,
  orders: ordersModel,
};
