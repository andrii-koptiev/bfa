import { createModel } from '@rematch/core';
import { AxiosError } from 'axios';

import {
  createClient,
  editClient,
  getClients,
  getOrders,
  removeClient,
} from '../../../api';
import {
  ClientMappedInterface,
  CreateClientPayloadInterface,
  EditClientPayloadInterface,
  OrderMappedInterface,
} from '../../../interfaces';
import { mapOrdersFromApi } from '../../../utils';
import { RootModel } from '../index';
import { OrdersStateType } from './types';

export const ordersModel = createModel<RootModel>()({
  state: {
    orders: [],
  } as OrdersStateType,
  reducers: {
    setOrders(state, orders: OrderMappedInterface[]) {
      state.orders = orders;
    },
  },
  effects: (dispatch) => ({
    async getOrders() {
      const orders = await getOrders()
        .then((res) => mapOrdersFromApi(res.data))
        .catch((e: AxiosError<{ message: string }>) => {
          throw new Error(e.message);
        });

      await dispatch.orders.setOrders(orders);
    },
    // async createClient(payload: CreateClientPayloadInterface) {
    //   await createClient(payload).catch(
    //     (e: AxiosError<{ message: string }>) => {
    //       throw new Error(e.message);
    //     },
    //   );
    //
    //   await dispatch.clients.getClients();
    // },
    // async editClient(payload: EditClientPayloadInterface) {
    //   await editClient(payload).catch((e: AxiosError<{ message: string }>) => {
    //     throw new Error(e.message);
    //   });
    //
    //   await dispatch.clients.getClients();
    // },
    // async removeClient(id: ClientMappedInterface['id']) {
    //   await removeClient(id).catch((e: AxiosError<{ message: string }>) => {
    //     throw new Error(e.message);
    //   });
    //
    //   await dispatch.clients.getClients();
    // },
  }),
});
