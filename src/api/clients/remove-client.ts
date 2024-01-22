import axios, { AxiosResponse } from 'axios';

import { ClientMappedInterface } from '../../interfaces';
import { BASE_URL, DATABASE_NAME } from '../../utils';

type removeClientResponseDto = {
  responseBody: null;
};

export const removeClient = (
  id: ClientMappedInterface['id'],
): Promise<AxiosResponse<removeClientResponseDto>> => {
  const url = `${BASE_URL}/${DATABASE_NAME}/clients/${id}.json`;

  return axios.delete<removeClientResponseDto>(url);
};
