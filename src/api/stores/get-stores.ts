import axios, { AxiosResponse } from 'axios';

import { StoreFromApiInterface } from '../../interfaces';
import { BASE_URL, DATABASE_NAME } from '../../utils';

export const getStores = (): Promise<AxiosResponse<StoreFromApiInterface>> => {
  const url = `${BASE_URL}/${DATABASE_NAME}/stores.json`;

  return axios.get<StoreFromApiInterface>(url);
};
