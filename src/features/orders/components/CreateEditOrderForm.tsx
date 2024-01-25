import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ModalFormCommon from '../../../components/ModalFormCommon';
import SelectCommon from '../../../components/SelectCommon';
import { InputStyled } from '../../../components/styled';
import { CurrencyEnum } from '../../../enums';
import { useFormValidation } from '../../../hooks';
import { OrderMappedInterface } from '../../../interfaces';
import { orderCurrencyOptions } from '../constants';
import { useCreateEditOrderFormValidation } from '../hooks';
import { CreateEditOrderFormValuesInterface } from '../interfaces';

type Props = {
  onSubmitForm: (values: CreateEditOrderFormValuesInterface) => void;
  onCancel: () => void;
  ordersList: OrderMappedInterface[];
  order?: OrderMappedInterface | null;
};

const CreateEditOrderForm: FC<Props> = ({
  onSubmitForm,
  onCancel,
  ordersList,
  order = null,
}) => {
  const { t } = useTranslation();
  const orderNumberInputLabel = t('order_form_order_number_label');
  const storeNameInputLabel = t('order_form_store_name_label');
  const currencyInputLabel = t('order_form_currency_label');
  const clientCurrencyRateInputLabel = t(
    'order_form_client_currency_rate_label',
  );
  const orderCurrencyRateInputLabel = t('order_form_order_currency_rate_label');
  const { values, handleChange, handleSubmit, errors, isAllInputsValid } =
    useFormValidation<CreateEditOrderFormValuesInterface>({
      initialValues: {
        orderNumber: order?.orderNumber ?? '',
        storeName: order?.storeName ?? '',
        currency: order?.currency ?? CurrencyEnum.EMPTY,
        clientCurrencyRate: order?.clientCurrencyRate ?? 0,
        orderCurrencyRate: order?.orderCurrencyRate ?? 0,
      },
      validationSchema: useCreateEditOrderFormValidation({
        order: order || null,
        ordersList,
        orderNumberLabel: orderNumberInputLabel,
        storeNameLabel: storeNameInputLabel,
        currencyLabel: currencyInputLabel,
        clientCurrencyRateLabel: clientCurrencyRateInputLabel,
        orderCurrencyRateLabel: orderCurrencyRateInputLabel,
      }),
      validateOnChange: true,
      onSubmit: (values) => onSubmitForm(values),
    });
  return (
    <ModalFormCommon
      title={t(order ? 'edit_order_form_title' : 'add_order_form_title')}
      subtitle={t('required_form_subtitle')}
      confirmButtonText={t(order ? 'common_edit' : 'common_add')}
      cancelButtonText={t('common_cancel')}
      onSubmitForm={handleSubmit}
      onCancel={onCancel}
      isSubmitDisabled={!isAllInputsValid}
    >
      <InputStyled
        label={orderNumberInputLabel}
        name='orderNumber'
        value={values.orderNumber}
        onChange={handleChange}
        error={!!errors.orderNumber}
        helperText={errors.orderNumber}
        required
      />
      <SelectCommon
        label={currencyInputLabel}
        options={orderCurrencyOptions}
        name={'currency'}
        value={values.currency}
        onChange={handleChange}
        error={!!errors.currency}
        helperText={errors.currency}
        required
      />
    </ModalFormCommon>
  );
};

export default CreateEditOrderForm;
