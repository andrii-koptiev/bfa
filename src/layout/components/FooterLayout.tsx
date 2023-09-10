import CopyrightIcon from '@mui/icons-material/Copyright';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';

import { TEXT_CONSTANTS } from '../../utils';

const FooterLayout: FC = () => {
  const { palette, zIndex } = useTheme();
  return (
    <Box
      height='40px'
      bgcolor={palette.primary.main}
      width='100%'
      zIndex={zIndex.appBar}
    >
      <Box
        display='flex'
        alignItems='center'
        height='100%'
        color={palette.text.primary}
      >
        <Box mr='8px' ml='16px' display='flex' alignItems='center'>
          <CopyrightIcon fontSize='small' />
        </Box>
        <Box mr='16px'>
          <Typography
            variant='h4'
            children={TEXT_CONSTANTS.LAYOUT.FOOTER_TITLE}
          />
        </Box>

        <Typography
          variant='h4'
          children={TEXT_CONSTANTS.LAYOUT.FOOTER_SUBTITLE}
        />
      </Box>
    </Box>
  );
};

export default FooterLayout;
