import axios, { AxiosResponse } from 'axios';

import { StoreWithoutIdInterface } from '../../interfaces';
import { BASE_URL, DATABASE_NAME } from '../../utils';

type CreateStoreRequestDto = {
  requestBody: StoreWithoutIdInterface;
};

type CreateStoreResponseDto = {
  name: string;
};

export const createStore = ({
  requestBody,
}: CreateStoreRequestDto): Promise<AxiosResponse<CreateStoreResponseDto>> => {
  const url = `${BASE_URL}/${DATABASE_NAME}/stores.json`;

  return axios.post<CreateStoreResponseDto>(url, requestBody);
};
