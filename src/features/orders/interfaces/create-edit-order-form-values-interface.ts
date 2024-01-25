import { CurrencyEnum } from '../../../enums';

export interface CreateEditOrderFormValuesInterface {
  orderNumber: string;
  storeName: string;
  currency: CurrencyEnum | null;
  clientCurrencyRate: number;
  orderCurrencyRate: number;
}
