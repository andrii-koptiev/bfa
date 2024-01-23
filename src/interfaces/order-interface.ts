import { CurrencyEnum } from '../enums';

export interface OrderWithoutIdInterface {
  orderNumber: string;
  storeName: string;
  totalAmountCurrency: number;
  currency: CurrencyEnum;
  clientCurrencyRate: number;
  orderCurrencyRate: number;
  totalAmountUAH: number;
  profit: number;
  createdAt: string;
}

export interface OrderFromApiInterface {
  [key: string]: OrderWithoutIdInterface;
}

export interface OrderMappedInterface extends OrderWithoutIdInterface {
  id: string;
}
