import { createModel } from '@rematch/core';
import { AxiosError } from 'axios';

import {
  createClient,
  editClient,
  getClients,
  removeClient,
} from '../../../api';
import {
  ClientMappedInterface,
  CreateClientPayloadInterface,
  EditClientPayloadInterface,
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
    async getClients() {
      const clients = await getClients()
        .then((res) => mapClientsFromApi(res.data))
        .catch((e: AxiosError<{ message: string }>) => {
          throw new Error(e.message);
        });

      await dispatch.clients.setClients(clients);
    },
    async createClient(payload: CreateClientPayloadInterface) {
      await createClient(payload).catch(
        (e: AxiosError<{ message: string }>) => {
          throw new Error(e.message);
        },
      );

      await dispatch.clients.getClients();
    },
    async editClient(payload: EditClientPayloadInterface) {
      await editClient(payload).catch((e: AxiosError<{ message: string }>) => {
        throw new Error(e.message);
      });

      await dispatch.clients.getClients();
    },
    async removeClient(id: ClientMappedInterface['id']) {
      await removeClient(id).catch((e: AxiosError<{ message: string }>) => {
        throw new Error(e.message);
      });

      await dispatch.clients.getClients();
    },
  }),
});
