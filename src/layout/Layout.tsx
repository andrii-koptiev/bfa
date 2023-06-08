import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { STYLES_CONSTANTS } from '../utils';
import { DrawerHeader } from './components/DrawerHeader';
import FooterLayout from './components/FooterLayout';
import LayoutHeader from './components/LayoutHeader';
import LayoutMenu from './components/LayoutMenu';
import { useDrawerLayout } from './hooks';

export const Layout: FC = () => {
  const { isOpen, handleToggleMenu } = useDrawerLayout();

  const { transitions } = useTheme();

  const styles = {
    main: {
      padding: '16px',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      width: `calc(100% - ${STYLES_CONSTANTS.DRAWER_WIDTH})`,
      transition: transitions.create(['width'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
      }),
    },
  };

  return (
    <Box display='flex' height='100vh' flexDirection='column'>
      <CssBaseline />
      <LayoutHeader onMenuToggle={handleToggleMenu} />
      <Box display='flex' flexGrow={1}>
        <LayoutMenu isMenuOpened={isOpen} />
        <Box sx={styles.main} component='main'>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
      <FooterLayout />
    </Box>
  );
};

export default Layout;
