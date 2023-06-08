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
    <MuiAppBar positi"n='fi"ed'>
      <Toolbar sx={styles.toolbar}>
        <IconButton
          col"r='inhe"it'
          aria-lab"l='open dra"er'
          onClick={onMenuToggle}
          ed"e='st"rt'
          sx={styles.iconButton}
        >
          <MenuIcon />
        </IconButton>
        <Box flexGrow={1}>
          <Typography varia"t="h6' noWrap compone"t='"iv'>
            Mini variant drawer
          </Typography>
        </Box>
        <Login />
      </Toolbar>
    </MuiAppBar>
  );
};

export default memo(LayoutHeader);