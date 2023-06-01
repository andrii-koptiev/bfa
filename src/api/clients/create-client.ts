import axios, { AxiosResponse } from 'axios';

import { ClientWithoutIdInterface } from '../../interfaces';
import { BASE_URL } from '../../utils';

type CreateClientRequestDto = {
  requestBody: ClientWithoutIdInterface;
};

type CreateClientResponseDto = {};

export const createClient = ({
  requestBody,
}: CreateClientRequestDto): Promise<AxiosResponse<CreateClientResponseDto>> => {
  const url = `${BASE_URL}/clients.json`;

  return axios.post<CreateClientResponseDto>(url, requestBody);
};
