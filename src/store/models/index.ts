import { Models } from '@rematch/core';

import { clientsModel } from './clients/clients.model';

export interface RootModel extends Models<RootModel> {
  clients: typeof clientsModel;
}
export const models: RootModel = {
  clients: clientsModel,
};
