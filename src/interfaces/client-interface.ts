export interface ClientWithoutIdInterface {
  name: string;
  phone: string;
  city: string;
  updatedAt: Date;
}

export interface ClientFromApiInterface {
  [key: string]: ClientWithoutIdInterface;
}

export interface ClientMappedInterface extends ClientWithoutIdInterface {
  id: string;
}
