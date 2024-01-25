export interface StoreWithoutIdInterface {
  name: string;
}

export interface StoreFromApiInterface {
  [key: string]: StoreWithoutIdInterface;
}

export interface StoreMappedInterface extends StoreWithoutIdInterface {
  id: string;
}
