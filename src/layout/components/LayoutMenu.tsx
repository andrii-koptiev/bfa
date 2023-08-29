import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, generatePath } from 'react-router-dom';

import { menuData } from '../../utils/menuData';
import LayoutTranslationToggle from './LayoutTranslationToggle';
import { DrawerHeader, DrawerStyled } from './styled';

type Props = {
  isMenuOpened: boolean;
};

export const LayoutMenu: FC<Props> = ({ isMenuOpened }) => {
  const { palette } = useTheme();
  const { t } = useTranslation();

  const styles = {
    list: {
      paddingTop: '16px',
    },
    itemButton: {
      minHeight: 48,
      justifyContent: isMenuOpened ? 'initial' : 'center',
      px: 2.5,
      mb: '8px',
      '&.active': {
        color: palette.primary.main,
        backgroundColor: palette.secondary.main,
      },
    },
    itemIcon: {
      minWidth: 0,
      mr: isMenuOpened ? 3 : 'auto',
      justifyContent: 'center',
      color: 'inherit',
    },
    itemText: {
      color: 'inherit',
      opacity: isMenuOpened ? 1 : 0,
    },
  };

  return (
    <DrawerStyled variant='permanent' open={isMenuOpened}>
      <DrawerHeader />
      <List sx={styles.list}>
        {menuData.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={styles.itemButton}
              component={NavLink}
              to={generatePath(item.route)}
            >
              <ListItemIcon sx={styles.itemIcon}>{<item.icon />}</ListItemIcon>
              <ListItemText primary={t(item.keyName)} sx={styles.itemText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <LayoutTranslationToggle />
    </DrawerStyled>
  );
};

export default memo(LayoutMenu);
