export interface ClientWithoutIdInterface {
  name: string;
  phone: string;
  address: string;
}

export interface ClientFromApiInterface {
  [key: string]: ClientWithoutIdInterface;
}

export interface ClientMappedInterface extends ClientWithoutIdInterface {
  id: string;
}
