import axios, { AxiosResponse } from 'axios';

import { OrderFromApiInterface } from '../../interfaces';
import { BASE_URL, DATABASE_NAME } from '../../utils';

export const getOrders = (): Promise<AxiosResponse<OrderFromApiInterface>> => {
  const url = `${BASE_URL}/${DATABASE_NAME}/orders.json`;

  return axios.get<OrderFromApiInterface>(url);
};
