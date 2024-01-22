import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import { Box } from '@mui/material';
import { FC } from 'react';

import ButtonCommon from './ButtonCommon';
import ModalHeaderCommon from './ModalHeaderCommon';

type Props = {
  title: string;
  confirmText: string;
  confirmButtonText: string;
  cancelButtonText: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationDialogCommon: FC<Props> = ({
  onConfirm,
  title,
  confirmText,
  onCancel,
  confirmButtonText,
  cancelButtonText,
}) => {
  return (
    <Box display='flex' flexDirection='column'>
      <Box mb='16px'>
        <ModalHeaderCommon title={title} />
      </Box>
      <Box display='flex' flexDirection='column' gap='24px' mb='48px'>
        {confirmText}
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
          variant='contained'
          startIcon={<CheckOutlinedIcon />}
          onClick={onConfirm}
        />
      </Box>
    </Box>
  );
};

export default ConfirmationDialogCommon;
