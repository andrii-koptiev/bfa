import {
  ClientFromApiInterface,
  ClientMappedInterface,
  OrderFromApiInterface,
  OrderMappedInterface,
} from '../../interfaces';

export const dataApiMappers = (
  apiData: ClientFromApiInterface,
): ClientMappedInterface[] =>
  Object.keys(apiData).map((id) => ({
    id,
    ...apiData[id],
  }));

export const mapOrdersFromApi = (
  apiData: OrderFromApiInterface,
): OrderMappedInterface[] =>
  Object.keys(apiData).map((id) => ({
    id,
    ...apiData[id],
  }));
