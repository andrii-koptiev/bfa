import { CurrencyEnum } from '../enums';

export interface OrderWithoutIdInterface {
  orderNumber: string;
  storeName: string;
  totalAmountCurrency: number | null;
  currency: CurrencyEnum;
  clientCurrencyRate: string;
  orderCurrencyRate: string;
  totalAmountUAH: number | null;
  profit: number | null;
  createdAt: string;
}

export interface OrderFromApiInterface {
  [key: string]: OrderWithoutIdInterface;
}

export interface OrderMappedInterface extends OrderWithoutIdInterface {
  id: string;
}
