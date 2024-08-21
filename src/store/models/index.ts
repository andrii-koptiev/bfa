import { Models } from '@rematch/core';

import { clientsModel } from './clients/clients.model';
import { ordersModel } from './orders/orders.model';
import { storesModel } from './stores/stores.model';

export interface RootModel extends Models<RootModel> {
  clients: typeof clientsModel;
  orders: typeof ordersModel;
  stores: typeof storesModel;
}
export const models: RootModel = {
  clients: clientsModel,
  orders: ordersModel,
  stores: storesModel,
};
