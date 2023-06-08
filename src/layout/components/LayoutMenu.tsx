import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { CSSObject, Theme, styled } from '@mui/material/styles';
import React, { FC, memo } from 'react';
import { Link, generatePath } from 'react-router-dom';

import { STYLES_CONSTANTS } from '../../utils';
import { menuData } from '../../utils/menuData';
import { DrawerHeader } from './DrawerHeader';

const openedMixin = (theme: Theme): CSSObject => ({
  width: STYLES_CONSTANTS.DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: STYLES_CONSTANTS.DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiPaper-root.MuiDrawer-paper': {
    backgroundColor: theme.palette.grey[100],
  },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

type Props = {
  isMenuOpened: boolean;
};

export const LayoutMenu: FC<Props> = ({ isMenuOpened }) => {
  const { palette } = useTheme();

  const styles = {
    list: {
      paddingTop: '16px',
    },
  };
  return (
    <Drawer variant='permanent' open={isMenuOpened}>
      <DrawerHeader />
      <List sx={styles.list}>
        {menuData.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isMenuOpened ? 'initial' : 'center',
                px: 2.5,
              }}
              component={Link}
              to={generatePath(item.route)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isMenuOpened ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {<item.icon />}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{ opacity: isMenuOpened ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default memo(LayoutMenu);
