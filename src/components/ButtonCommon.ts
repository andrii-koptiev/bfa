import { Button, styled } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { CSSObject } from '@mui/material/styles';

interface ButtonProps extends MuiButtonProps {
  width?: number | string;
  height?: number | string;
  fontsize?: number | string;
}

const ButtonCommon = styled(Button)<ButtonProps>(
  ({ theme, width = '180px', height = '36px', fontsize }): CSSObject => ({
    width: width,
    height: height,
    textTransform: 'none',
    gap: '8px',
    borderRadius: theme.shape.borderRadius,
    padding: '9px 12px',
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: fontsize,
    '& .MuiSvgIcon-root': {
      width: '14px',
    },
    '& .MuiButton-startIcon': {
      margin: 0,
      width: '14px',
    },
  }),
);

export default ButtonCommon;
