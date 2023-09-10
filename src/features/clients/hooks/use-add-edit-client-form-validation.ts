import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';

import { LanguagesEnum } from '../../../enums';
import { ClientMappedInterface } from '../../../interfaces';
import {
  clientCityFormatRegExpEn,
  clientCityFormatRegExpUa,
  clientNameFormatRegExpEn,
  clientNameFormatRegExpUa,
  clientPhoneFormatRegExpUa,
  inputUniqueValidation,
} from '../../../utils';

type AddEditClientValidationFormData = {
  client: ClientMappedInterface | null;
  clientsList: ClientMappedInterface[];
  nameLabel: string;
  phoneLabel: string;
  cityLabel: string;
};

export const useAddEditClientFormValidation = ({
  client,
  clientsList,
  nameLabel,
  phoneLabel,
  cityLabel,
}: AddEditClientValidationFormData) => {
  const { t, i18n } = useTranslation();
  const [nameFormatLng, setNameFormatLng] = useState<RegExp>(
    clientNameFormatRegExpEn,
  );
  const [cityFormatLng, setCityFormatLng] = useState<RegExp>(
    clientCityFormatRegExpEn,
  );
  useEffect(() => {
    switch (i18n.language) {
      case LanguagesEnum.EN:
        setNameFormatLng(clientNameFormatRegExpEn);
        setCityFormatLng(clientCityFormatRegExpEn);
        break;
      case LanguagesEnum.UA:
        setNameFormatLng(clientNameFormatRegExpUa);
        setCityFormatLng(clientCityFormatRegExpUa);
        break;
      default:
        setNameFormatLng(clientNameFormatRegExpEn);
    }
  }, [i18n.language]);

  return object().shape({
    name: string()
      .label(nameLabel)
      .strict(true)
      .trim()
      .matches(
        nameFormatLng,
        ({ label }) =>
          `${label} ${t('add_client_form_name_format_error_message')}`,
      )
      .test(
        'unique-name',
        t('add_client_form_name_unique_error_message'),
        (value) => {
          return inputUniqueValidation({
            value: value || null,
            data: clientsList,
            existingValue: client?.name || null,
            fieldName: 'name',
          });
        },
      )
      .required('Required'),

    phone: string()
      .label(phoneLabel)
      .strict(true)
      .trim()
      .matches(
        clientPhoneFormatRegExpUa,
        ({ label }) =>
          `${label} ${t('add_client_form_phone_format_error_message')}`,
      )
      .test(
        'unique-name',
        t('add_client_form_phone_unique_error_message'),
        (value) => {
          return inputUniqueValidation({
            value: value || null,
            data: clientsList,
            existingValue: client?.phone || null,
            fieldName: 'phone',
          });
        },
      )
      .required('Required'),

    city: string()
      .label(cityLabel)
      .strict(true)
      .trim()
      .matches(
        cityFormatLng,
        ({ label }) =>
          `${label} ${t('add_client_form_city_format_error_message')}`,
      )
      .required('Required'),
  });
};
