import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { FC, useState } from 'react';

import { DrawerHeader } from './components/DrawerHeader';
import LayoutHeader from './components/LayoutHeader';
import LayoutMenu from './components/LayoutMenu';

export const Layout: FC = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <LayoutHeader isMenuOpened={open} onOpen={handleDrawerOpen} />
      <LayoutMenu isMenuOpened={open} onClose={handleDrawerClose} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
};

export default Layout;
