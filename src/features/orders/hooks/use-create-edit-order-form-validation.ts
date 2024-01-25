import { useTranslation } from 'react-i18next';
import { mixed, object, string } from 'yup';

import { CurrencyEnum } from '../../../enums';
import { OrderMappedInterface } from '../../../interfaces';
import {
  inputUniqueValidation,
  numbersFormatRegExp,
  orderNumberFormatRegExp,
} from '../../../utils';

type CreateEditClientValidationFormData = {
  order: OrderMappedInterface | null;
  ordersList: OrderMappedInterface[];
  orderNumberLabel: string;
  storeNameLabel: string;
  currencyLabel: CurrencyEnum;
  clientCurrencyRateLabel: number;
  orderCurrencyRateLabel: number;
};

export const useCreateEditOrderFormValidation = ({
  order,
  ordersList,
  orderNumberLabel,
  storeNameLabel,
  currencyLabel,
  clientCurrencyRateLabel,
  orderCurrencyRateLabel,
}: CreateEditClientValidationFormData) => {
  const { t } = useTranslation();

  return object().shape({
    orderNumber: string()
      .label(orderNumberLabel)
      .strict(true)
      .trim()
      .matches(
        orderNumberFormatRegExp,
        ({ label }) =>
          `${label} ${t('order_form_order_number_format_error_message')}`,
      )
      .test(
        'unique-name',
        t('order_form_order_number_unique_error_message'),
        (value) => {
          return inputUniqueValidation({
            value: value || null,
            data: ordersList,
            existingValue: order?.orderNumber || null,
            fieldName: 'orderNumber',
          });
        },
      )
      .required('Required'),

    currency: mixed<CurrencyEnum>()
      .label(currencyLabel)
      .oneOf(Object.values(CurrencyEnum))
      .required('Required'),

    orderCurrencyRate: string()
      .label(String(orderCurrencyRateLabel))
      .strict(true)
      .trim()
      .matches(
        numbersFormatRegExp,
        ({ label }) => `${label} ${t('input_number_format_error_message')}`,
      )
      .required('Required'),

    clientCurrencyRate: string()
      .label(String(clientCurrencyRateLabel))
      .strict(true)
      .trim()
      .matches(
        numbersFormatRegExp,
        ({ label }) => `${label} ${t('input_number_format_error_message')}`,
      )
      .required('Required'),
  });
};
