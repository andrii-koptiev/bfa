import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

import ButtonCommon from './ButtonCommon';
import ModalHeaderCommon from './ModalHeaderCommon';

type Props = {
  title: string;
  subtitle: string;
  cancelButtonText: string;
  confirmButtonText: string;
  onSubmitForm: (values: any) => void;
  onCancel: () => void;
  isSubmitDisabled?: boolean;
  children: ReactNode;
};
const ModalFormCommon: FC<Props> = ({
  title,
  subtitle,
  children,
  cancelButtonText,
  confirmButtonText,
  onSubmitForm,
  onCancel,
  isSubmitDisabled,
}) => {
  return (
    <Box
      component='form'
      display='flex'
      flexDirection='column'
      onSubmit={onSubmitForm}
    >
      <Box mb='32px'>
        <ModalHeaderCommon title={title} subtitle={subtitle} />
      </Box>
      <Box display='flex' flexDirection='column' gap='20px' mb='24px'>
        {children}
      </Box>
      <Box
        display='flex'
        gap='24px'
        justifyContent='space-between'
        paddingX='12px'
      >
        <ButtonCommon
          children={cancelButtonText}
          variant='contained'
          color='error'
          startIcon={<DoDisturbOnOutlinedIcon />}
          onClick={onCancel}
        />
        <ButtonCommon
          children={confirmButtonText}
          type='submit'
          variant='contained'
          startIcon={<CheckOutlinedIcon />}
          disabled={isSubmitDisabled}
        />
      </Box>
    </Box>
  );
};

export default ModalFormCommon;
