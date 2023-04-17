import MenuIcon from '@mui/icons-material/Menu';
import { Box, Toolbar, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import React, { FC, memo } from 'react';

import Login from '../../features/login/Login';
import { STYLES_CONSTANTS } from '../../utils';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: STYLES_CONSTANTS.DRAWER_WIDTH,
    width: `calc(100% - ${STYLES_CONSTANTS.DRAWER_WIDTH})`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type HeaderProps = {
  isMenuOpened: boolean;
  onOpen: () => void;
};

export const LayoutHeader: FC<HeaderProps> = ({ isMenuOpened, onOpen }) => {
  return (
    <AppBar position='fixed' open={isMenuOpened}>
      <Toolbar sx={{ width: '100%' }}>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={onOpen}
          edge='start'
          sx={{
            marginRight: 5,
            ...(isMenuOpened && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h6' noWrap component='div'>
            Mini variant drawer
          </Typography>
        </Box>
        <Login />
      </Toolbar>
    </AppBar>
  );
};

export default memo(LayoutHeader);
