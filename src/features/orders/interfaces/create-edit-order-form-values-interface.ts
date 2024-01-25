import { CurrencyEnum } from '../../../enums';

export interface CreateEditOrderFormValuesInterface {
  orderNumber: string;
  storeName: string;
  currency: CurrencyEnum;
  clientCurrencyRate: number;
  orderCurrencyRate: number;
}
