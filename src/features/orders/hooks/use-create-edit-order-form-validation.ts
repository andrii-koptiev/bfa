import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';

import { CurrencyEnum } from '../../../enums';
import { OrderMappedInterface } from '../../../interfaces';
import { inputUniqueValidation, orderNumberFormatRegExp } from '../../../utils';

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
  // const [nameFormatLng, setNameFormatLng] = useState<RegExp>(
  //   clientNameFormatRegExpEn,
  // );
  // const [cityFormatLng, setCityFormatLng] = useState<RegExp>(
  //   clientCityFormatRegExpEn,
  // );
  // useEffect(() => {
  //   switch (i18n.language) {
  //     case LanguagesEnum.EN:
  //       setNameFormatLng(clientNameFormatRegExpEn);
  //       setCityFormatLng(clientCityFormatRegExpEn);
  //       break;
  //     case LanguagesEnum.UA:
  //       setNameFormatLng(clientNameFormatRegExpUa);
  //       setCityFormatLng(clientCityFormatRegExpUa);
  //       break;
  //     default:
  //       setNameFormatLng(clientNameFormatRegExpEn);
  //   }
  // }, [i18n.language]);

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

    // phone: string()
    //   .label(phoneLabel)
    //   .strict(true)
    //   .trim()
    //   .matches(
    //     clientPhoneFormatRegExpUa,
    //     ({ label }) =>
    //       `${label} ${t('add_client_form_phone_format_error_message')}`,
    //   )
    //   .test(
    //     'unique-name',
    //     t('add_client_form_phone_unique_error_message'),
    //     (value) => {
    //       return inputUniqueValidation({
    //         value: value || null,
    //         data: clientsList,
    //         existingValue: client?.phone || null,
    //         fieldName: 'phone',
    //       });
    //     },
    //   )
    //   .required('Required'),

    // city: string()
    //   .label(cityLabel)
    //   .strict(true)
    //   .trim()
    //   .matches(
    //     cityFormatLng,
    //     ({ label }) =>
    //       `${label} ${t('add_client_form_city_format_error_message')}`,
    //   ),
  });
};
