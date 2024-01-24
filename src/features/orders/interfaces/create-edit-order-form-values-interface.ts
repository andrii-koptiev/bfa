import { CurrencyEnum } from '../../../enums';

export interface CreateEditOrderFormValuesInterface {
  orderNumber: string;
  storeName: string;
  totalAmountCurrency: number | null;
  currency: CurrencyEnum;
  clientCurrencyRate: number;
  orderCurrencyRate: number;
  totalAmountUAH: number | null;
  profit: number | null;
  createdAt: string;
}
