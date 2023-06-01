export interface ClientWithoutIdInterface {
  name: string;
}

export interface ClientFromApiInterface {
  [key: string]: ClientWithoutIdInterface;
}

export interface ClientMappedInterface {
  id: string;
  data: ClientWithoutIdInterface;
}
