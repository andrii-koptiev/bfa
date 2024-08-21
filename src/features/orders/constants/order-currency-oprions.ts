import { CurrencyEnum } from '../../../enums';

export const orderCurrencyOptions = Object.values(CurrencyEnum).map((type) => ({
  id: type,
  name: type,
}));
