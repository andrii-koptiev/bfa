import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ModalFormCommon from '../../../components/ModalFormCommon';
import { InputStyled } from '../../../components/styled';
import { useFormValidation } from '../../../hooks';
import { ClientMappedInterface } from '../../../interfaces';
import { AddEditClientFormValuesInterface } from '../interfaces';
import { useAddEditClientFormValidationSchema } from './add-edit-client-form-validation-schema';

type Props = {
  onSubmitForm: (values: AddEditClientFormValuesInterface) => void;
  clientsList: ClientMappedInterface[];
  client?: ClientMappedInterface;
};

const AddEditClientForm: FC<Props> = ({
  client,
  onSubmitForm,
  clientsList,
}) => {
  const { t } = useTranslation();
  const nameInputLabel = t('add_client_form_name_label');
  const phoneInputLabel = t('add_client_form_phone_label');
  const { values, handleChange, handleSubmit, errors, isAllInputsValid } =
    useFormValidation<AddEditClientFormValuesInterface>({
      initialValues: {
        name: client?.name ?? '',
        phone: client?.phone ?? '',
        city: client?.city ?? '',
      },
      validationSchema: useAddEditClientFormValidationSchema({
        client: client || null,
        clientsList,
        nameLabel: nameInputLabel,
        phoneLabel: phoneInputLabel,
      }),
      validateOnChange: true,
      onSubmit: (values) => onSubmitForm(values),
    });
  return (
    <ModalFormCommon
      title={t('add_client_form_title')}
      subtitle={t('add_client_form_subtitle')}
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
    </ModalFormCommon>
  );
};

export default AddEditClientForm;
