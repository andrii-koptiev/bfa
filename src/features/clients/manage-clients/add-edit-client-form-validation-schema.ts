import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';

import { LanguagesEnum } from '../../../enums';
import { ClientMappedInterface } from '../../../interfaces';
import {
  clientNameFormatRegExpEn,
  clientNameFormatRegExpUa,
  inputUniqueValidation,
  phoneFormatRegExpUa,
} from '../../../utils';

type AddEditClientValidationFormData = {
  client: ClientMappedInterface | null;
  clientsList: ClientMappedInterface[];
  nameLabel: string;
  phoneLabel: string;
};

export const useAddEditClientFormValidationSchema = ({
  client,
  clientsList,
  nameLabel,
  phoneLabel,
}: AddEditClientValidationFormData) => {
  const { t, i18n } = useTranslation();
  const [nameFormatLng, setNameFormatLng] = useState<RegExp>(
    clientNameFormatRegExpEn,
  );
  useEffect(() => {
    switch (i18n.language) {
      case LanguagesEnum.EN:
        setNameFormatLng(clientNameFormatRegExpEn);
        break;
      case LanguagesEnum.UA:
        setNameFormatLng(clientNameFormatRegExpUa);
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
        phoneFormatRegExpUa,
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
  });
};
