import axios, { AxiosResponse } from 'axios';

import { ClientFromApiInterface } from '../../interfaces';
import { BASE_URL, DATABASE_NAME } from '../../utils';

export const getClients = (): Promise<
  AxiosResponse<ClientFromApiInterface>
> => {
  const url = `${BASE_URL}/${DATABASE_NAME}/clients.json`;

  return axios.get<ClientFromApiInterface>(url);
};
