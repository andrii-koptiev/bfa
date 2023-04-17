import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

import { TEXT_LOGIN, auth, provider } from '../../utils';

interface Setting {
  name: string;
  description: string;
  onClose: () => Promise<void>;
}

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  const onLogin = async (): Promise<void> => {
    try {
      const result = await signInWithPopup(auth, provider);
      setIsLoggedIn(true);
      result.user.email && localStorage.setItem('email', result.user.email);

      result.user.displayName &&
        localStorage.setItem('name', result.user.displayName);
      result.user.photoURL &&
        localStorage.setItem('photoUrl', result.user.photoURL);
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async (): Promise<void> => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('photoUrl');
    } catch (e) {
      console.log(e);
    }
  };

  const settings: Setting[] = [
    {
      name: 'logout',
      description: TEXT_LOGIN.LOGOUT_BUTTON,
      onClose: onLogout,
    },
  ];

  useEffect(() => {
    localStorage.getItem('email') && setIsLoggedIn(true);
    setUserName(localStorage.getItem('name'));
    setPhotoUrl(localStorage.getItem('photoUrl'));
    console.log(photoUrl);
  }, [photoUrl]);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {' '}
      {isLoggedIn ? (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title='Open settings'>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={userName ? userName : ''}
                src={photoUrl ? photoUrl : ''}
                imgProps={{
                  sx: { referrerpolicy: 'no-referrer' },
                }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting.name}
                onClick={() => {
                  handleCloseUserMenu();
                  setting.onClose();
                }}
              >
                <Typography textAlign='center'>
                  {setting.description}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ) : (
        <Button
          variant='contained'
          color='secondary'
          disableElevation
          onClick={onLogin}
        >
          {TEXT_LOGIN.LOGIN_BUTTON}
        </Button>
      )}
    </>
  );
};

export default Login;
