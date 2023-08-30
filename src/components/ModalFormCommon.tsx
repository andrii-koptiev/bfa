import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

import FormsHeaderCommon from './FormsHeaderCommon';

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
};
const ModalFormCommon: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <Box component='form' display='flex' flexDirection='column'>
      <Box mb='16px'>
        <FormsHeaderCommon title={title} subtitle={subtitle} />
      </Box>
      <Box display='flex' flexDirection='column' gap='24px'>
        {children}
      </Box>
    </Box>
  );
};

export default ModalFormCommon;
