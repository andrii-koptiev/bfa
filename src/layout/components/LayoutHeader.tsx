import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { FC, memo } from 'react';

import Login from '../../features/login/Login';

type Props = {
  onMenuToggle: () => void;
};

const LayoutHeader: FC<Props> = ({ onMenuToggle }) => {
  const styles = {
    toolbar: {
      width: '100%',
    },
    iconButton: {
      marginRight: 5,
    },
  };
  return (
    <MuiAppBar position='fixed'>
      <Toolbar sx={styles.toolbar}>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={onMenuToggle}
          edge='start'
          sx={styles.iconButton}
        >
          <MenuIcon />
        </IconButton>
        <Box flexGrow={1}>
          <Typography variant='h6' noWrap component='div'>
            Mini variant drawer
          </Typography>
        </Box>
        <Login />
      </Toolbar>
    </MuiAppBar>
  );
};

export default memo(LayoutHeader);
