import { Alert, AlertColor } from '@mui/material';
import { FC } from 'react';

type Props = {
  color: AlertColor;
  text: string;
};

export const AlertCommon: FC<Props> = ({ color, text }) => {
  const styles = {
    alert: {
      position: 'absolute',
      top: '86px',
      left: '40%',
    },
  };
  return <Alert severity={color} sx={styles.alert} children={text} />;
};

export default AlertCommon;
