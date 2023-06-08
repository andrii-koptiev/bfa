import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';

const FooterLayout: FC = () => {
  const { palette, zIndex } = useTheme();
  return (
    <Box
      height='40px'
      bgcolor={palette.primary.main}
      width='100%'
      zIndex={zIndex.appBar}
    >
      Footer
    </Box>
  );
};

export default FooterLayout;
