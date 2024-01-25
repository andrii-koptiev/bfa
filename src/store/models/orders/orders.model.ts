import { createModel } from '@rematch/core';
import { AxiosError } from 'axios';

import {
  createClient,
  createOrder,
  editClient,
  getClients,
  getOrders,
  removeClient,
} from '../../../api';
import {
  ClientMappedInterface,
  CreateClientPayloadInterface,
  CreateOrderPayloadInterface,
  EditClientPayloadInterface,
  OrderMappedInterface,
} from '../../../interfaces';
import { mapFromApi } from '../../../utils';
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
        .then((res) => mapFromApi(res.data))
        .catch((e: AxiosError<{ message: string }>) => {
          throw new Error(e.message);
        });

      await dispatch.orders.setOrders(orders);
    },

    async createOrder(payload: CreateOrderPayloadInterface) {
      await createOrder(payload).catch((e: AxiosError<{ message: string }>) => {
        throw new Error(e.message);
      });

      await dispatch.orders.getOrders();
    },
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
