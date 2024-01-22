import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

const ModalHeaderCommon: FC<Props> = ({ title, subtitle }) => {
  return (
    <Box display='flex' flexDirection='column' gap='4px'>
      <Typography
        variant='h3'
        children={title}
        data-testid='forms-header-common-title'
      />
      {subtitle && (
        <Typography
          variant='subtitle2'
          children={subtitle}
          data-testid='forms-header-common-subtitle'
        />
      )}
    </Box>
  );
};

export default ModalHeaderCommon;
