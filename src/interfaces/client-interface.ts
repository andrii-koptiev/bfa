export interface ClientWithoutIdInterface {
  name: string;
  phone: string;
  address: string;
  createdAt: string;
}

export interface ClientFromApiInterface {
  [key: string]: ClientWithoutIdInterface;
}

export interface ClientMappedInterface extends ClientWithoutIdInterface {
  id: string;
}
