import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ModalFormCommon from '../../../components/ModalFormCommon';
import { InputStyled } from '../../../components/styled';

const AddEditClientForm: FC = () => {
  const { t } = useTranslation();
  return (
    <ModalFormCommon
      title={t('add_client_form_title')}
      subtitle={t('add_client_form_subtitle')}
    >
      <InputStyled />
      <InputStyled />
    </ModalFormCommon>
  );
};

export default AddEditClientForm;
