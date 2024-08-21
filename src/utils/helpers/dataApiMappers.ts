type ApiInterface<T> = {
  [id: string]: T;
};

type MappedInterface<T> = {
  id: string;
} & T;

export const mapFromApi = <T>(apiData: ApiInterface<T>): MappedInterface<T>[] =>
  Object.keys(apiData).map((id) => ({
    id,
    ...apiData[id],
  }));
