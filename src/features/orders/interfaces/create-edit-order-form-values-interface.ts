import { CurrencyEnum } from '../../../enums';

export interface CreateEditOrderFormValuesInterface {
  orderNumber: string;
  storeName: string;
  currency: CurrencyEnum;
  clientCurrencyRate: string;
  orderCurrencyRate: string;
}
