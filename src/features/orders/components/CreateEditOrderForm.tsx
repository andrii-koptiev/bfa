import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import ModalFormCommon from '../../../components/ModalFormCommon';
import SearchSelectCommon from '../../../components/SearchSelectCommon';
import SelectCommon from '../../../components/SelectCommon';
import { InputStyled } from '../../../components/styled';
import { CurrencyEnum } from '../../../enums';
import { useFormValidation } from '../../../hooks';
import { OrderMappedInterface } from '../../../interfaces';
import { useAppDispatch } from '../../../store';
import { selectAllStores } from '../../../store/models/stores/selectors';
import { STYLES_CONSTANTS } from '../../../utils';
import { orderCurrencyOptions } from '../constants';
import { useCreateEditOrderFormValidation } from '../hooks';
import { useGetStores } from '../hooks/use-get-stores';
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

  const storesSelectOptions = useSelector(selectAllStores);

  const { values, handleChange, handleSubmit, errors, isAllInputsValid } =
    useFormValidation<CreateEditOrderFormValuesInterface>({
      initialValues: {
        orderNumber: order?.orderNumber ?? '',
        storeName: order?.storeName ?? '',
        currency: order?.currency ?? CurrencyEnum.EMPTY,
        clientCurrencyRate: order?.clientCurrencyRate ?? '',
        orderCurrencyRate: order?.orderCurrencyRate ?? '',
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

  useGetStores();

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
        sx={{ minHeight: STYLES_CONSTANTS.INPUT_MIN_HEIGHT }}
        label={orderNumberInputLabel}
        name='orderNumber'
        value={values.orderNumber}
        onChange={handleChange}
        error={!!errors.orderNumber}
        helperText={errors.orderNumber}
        required
      />
      <SearchSelectCommon
        label={storeNameInputLabel}
        options={storesSelectOptions}
        selectedValue={null}
        onSelectionChange={handleChange}
        placeholderText={'aaa'}
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
      <InputStyled
        sx={{ minHeight: STYLES_CONSTANTS.INPUT_MIN_HEIGHT }}
        label={orderCurrencyRateInputLabel}
        name='orderCurrencyRate'
        value={values.orderCurrencyRate}
        onChange={handleChange}
        error={!!errors.orderCurrencyRate}
        helperText={errors.orderCurrencyRate}
        required
      />
      <InputStyled
        sx={{ minHeight: STYLES_CONSTANTS.INPUT_MIN_HEIGHT }}
        label={clientCurrencyRateInputLabel}
        name='clientCurrencyRate'
        value={values.clientCurrencyRate}
        onChange={handleChange}
        error={!!errors.clientCurrencyRate}
        helperText={errors.clientCurrencyRate}
        required
      />
    </ModalFormCommon>
  );
};

export default CreateEditOrderForm;
