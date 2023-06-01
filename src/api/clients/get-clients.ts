import axios, { AxiosResponse } from 'axios';

import { ClientFromApiInterface } from '../../interfaces';
import { BASE_URL } from '../../utils';

export const getClients = (): Promise<
  AxiosResponse<ClientFromApiInterface>
> => {
  const url = `${BASE_URL}/clients.json`;

  return axios.get<ClientFromApiInterface>(url);
};
