import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Divider,
  IconButton,
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
    backgroundColor: theme.palette.secondary.main,
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

type MenuProps = {
  isMenuOpened: boolean;
  onClose: () => void;
};

export const LayoutMenu: FC<MenuProps> = ({ isMenuOpened, onClose }) => {
  const theme = useTheme();
  return (
    <Drawer variant='permanent' open={isMenuOpened}>
      <DrawerHeader>
        <IconButton onClick={onClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuData.map((item) => (
          <ListItem key={item.index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isMenuOpened ? 'initial' : 'center',
                px: 2.5,
              }}
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
