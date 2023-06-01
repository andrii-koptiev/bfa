import {
  ClientFromApiInterface,
  ClientMappedInterface,
} from '../../interfaces';

export const mapClientsFromApi = (
  apiData: ClientFromApiInterface,
): ClientMappedInterface[] =>
  Object.keys(apiData).map((id) => ({
    id,
    data: { ...apiData[id] },
  }));
