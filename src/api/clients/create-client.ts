import axios, { AxiosResponse } from 'axios';

import { ClientWithoutIdInterface } from '../../interfaces';
import { BASE_URL, DATABASE_NAME } from '../../utils';

type CreateClientRequestDto = {
  requestBody: ClientWithoutIdInterface;
};

type CreateClientResponseDto = {
  name: string;
};

export const createClient = ({
  requestBody,
}: CreateClientRequestDto): Promise<AxiosResponse<CreateClientResponseDto>> => {
  const url = `${BASE_URL}/${DATABASE_NAME}/clients.json`;

  return axios.post<CreateClientResponseDto>(url, requestBody);
};
