export interface ClientWithoutIdInterface {
  name: string;
  phone: string;
  postAddress: string;
}

export interface ClientFromApiInterface {
  [key: string]: ClientWithoutIdInterface;
}

export interface ClientMappedInterface {
  id: string;
  data: ClientWithoutIdInterface;
}
