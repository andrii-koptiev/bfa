import axios, { AxiosResponse } from 'axios';

import {
  ClientMappedInterface,
  ClientWithoutIdInterface,
} from '../../interfaces';
import { BASE_URL, DATABASE_NAME } from '../../utils';

type EditClientRequestDto = {
  requestBody: ClientMappedInterface;
};

type EditClientResponseDto = {
  responseBody: ClientWithoutIdInterface;
};

export const editClient = ({
  requestBody,
}: EditClientRequestDto): Promise<AxiosResponse<EditClientResponseDto>> => {
  const url = `${BASE_URL}/${DATABASE_NAME}/clients/${requestBody.id}.json`;

  const requestWithoutClientId: ClientWithoutIdInterface = {
    name: requestBody.name,
    phone: requestBody.phone,
    address: requestBody.address,
    createdAt: requestBody.createdAt,
  };

  return axios.patch<EditClientResponseDto>(url, requestWithoutClientId);
};
