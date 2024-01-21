import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ModalFormCommon from '../../../components/ModalFormCommon';
import { InputStyled } from '../../../components/styled';
import { useFormValidation } from '../../../hooks';
import { ClientMappedInterface } from '../../../interfaces';
import { useAddEditClientFormValidation } from '../hooks';
import {
  AddClientFormValuesInterface,
  EditClientFormValuesInterface,
} from '../interfaces';

type Props = {
  onSubmitForm: (values: any) => void;
  onCancel: () => void;
  clientsList: ClientMappedInterface[];
  client?: ClientMappedInterface | null;
};

const AddEditClientForm: FC<Props> = ({
  onSubmitForm,
  onCancel,
  clientsList,
  client = null,
}) => {
  const { t } = useTranslation();
  const nameInputLabel = t('add_client_form_name_label');
  const phoneInputLabel = t('add_client_form_phone_label');
  const cityInputLabel = t('add_client_form_city_label');
  const { values, handleChange, handleSubmit, errors, isAllInputsValid } =
    useFormValidation<
      AddClientFormValuesInterface | EditClientFormValuesInterface
    >({
      initialValues: {
        name: client?.name ?? '',
        phone: client?.phone ?? '',
        city: client?.city ?? '',
      },
      validationSchema: useAddEditClientFormValidation({
        client: client || null,
        clientsList,
        nameLabel: nameInputLabel,
        phoneLabel: phoneInputLabel,
        cityLabel: cityInputLabel,
      }),
      validateOnChange: true,
      onSubmit: (values) => onSubmitForm(values),
    });
  return (
    <ModalFormCommon
      title={t('add_client_form_title')}
      subtitle={t('add_client_form_subtitle')}
      confirmButtonText={t(client ? 'common_edit' : 'common_add')}
      cancelButtonText={t('common_cancel')}
      onSubmitForm={handleSubmit}
      onCancel={onCancel}
      isSubmitDisabled={!isAllInputsValid}
    >
      <InputStyled
        label={nameInputLabel}
        name='name'
        value={values.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        required
      />
      <InputStyled
        label={phoneInputLabel}
        name='phone'
        value={values.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        required
      />
      <InputStyled
        label={cityInputLabel}
        name='city'
        value={values.city}
        onChange={handleChange}
        error={!!errors.city}
        helperText={errors.city}
        required
      />
    </ModalFormCommon>
  );
};

export default AddEditClientForm;
