import { createModel } from '@rematch/core';
import { AxiosError } from 'axios';

import { createClient, getClients } from '../../../api';
import {
  ClientMappedInterface,
  CreateClientPayloadInterface,
} from '../../../interfaces';
import { mapClientsFromApi } from '../../../utils';
import { RootModel } from '../index';
import { ClientStateType } from './types';

export const clientsModel = createModel<RootModel>()({
  state: {
    clients: [],
  } as ClientStateType,
  reducers: {
    setClients(state, clients: ClientMappedInterface[]) {
      state.clients = clients;
    },
  },
  effects: (dispatch) => ({
    async createClient(payload: CreateClientPayloadInterface) {
      await createClient(payload).catch(
        (e: AxiosError<{ message: string }>) => {
          throw new Error(e.message);
        },
      );

      await dispatch.clients.getClients();
    },

    async getClients() {
      const clients = await getClients()
        .then((res) => mapClientsFromApi(res.data))
        .catch((e: AxiosError<{ message: string }>) => {
          throw new Error(e.message);
        });

      await dispatch.clients.setClients(clients);
    },
  }),
});
