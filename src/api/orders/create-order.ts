import axios, { AxiosResponse } from 'axios';

import { OrderWithoutIdInterface } from '../../interfaces';
import { BASE_URL, DATABASE_NAME } from '../../utils';

type CreateOrderRequestDto = {
  requestBody: OrderWithoutIdInterface;
};

type CreateOrderResponseDto = {
  name: string;
};

export const createOrder = ({
  requestBody,
}: CreateOrderRequestDto): Promise<AxiosResponse<CreateOrderResponseDto>> => {
  const url = `${BASE_URL}/${DATABASE_NAME}/orders.json`;

  return axios.post<CreateOrderResponseDto>(url, requestBody);
};
