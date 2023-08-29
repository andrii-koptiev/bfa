import { Box, IconButton } from '@mui/material';
import { UA, US } from 'country-flag-icons/react/3x2';
import { FC } from 'react';

export const LayoutTranslationToggle: FC = () => {
  const styles = {
    container: {
      display: 'flex',
      gap: '8px',
    },
    iconButton: {
      width: '30px',
      padding: 0,
      opacity: 0.3,
    },
    selected: {
      opacity: 1,
    },
  };
  return (
    <Box sx={styles.container}>
      <IconButton sx={styles.iconButton}>
        <US title='United States' />
      </IconButton>
      <IconButton sx={{ ...styles.iconButton, ...styles.selected }}>
        <UA title='Ukraine' />
      </IconButton>
    </Box>
  );
};

export default LayoutTranslationToggle;
