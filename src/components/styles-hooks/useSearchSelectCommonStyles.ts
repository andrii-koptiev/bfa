import { useTheme } from '@mui/material/styles';

import { STYLES_CONSTANTS } from '../../utils';

export const useSearchSelectCommonStyles = () => {
  const { shadows, shape, palette } = useTheme();

  return {
    wrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      minHeight: STYLES_CONSTANTS.INPUT_MIN_HEIGHT,
    },
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      border: `1px solid ${palette.grey['300']}`,
      borderRadius: `${shape.borderRadius}px`,
      position: 'relative',
      '& :hover': {
        border: `1px solid ${palette.grey['400']}`,
      },
    },
    select: {
      position: 'absolute',
      // height: '39px',
      width: '100%',
      // borderTopRightRadius: 0,
      // borderBottomRightRadius: 0,
      backgroundColor: 'white',
      // borderTopLeftRadius: `${shape.borderRadius}px`,
      // borderBottomLeftRadius: `${shape.borderRadius}px`,
      border: 'none',
      textTransform: 'capitalize',
      '& .MuiInputBase-root:hover': {
        backgroundColor: 'transparent',
      },
      '&:hover': {
        backgroundColor: 'transparent',
        border: 'none',
      },
    },
    menuItem: {
      textTransform: 'capitalize',
    },
    paper: {
      boxShadow: shadows[1],
    },
    input: {
      width: '80%',
      height: '100%',
      // height: STYLES_CONSTANTS.INPUT_MIN_HEIGHT,
      // borderTopLeftRadius: 0,
      // borderBottomLeftRadius: 0,
      '&.MuiFormControl-root': {
        backgroundColor: 'transparent',
        border: 'none',
        '& :hover': {
          backgroundColor: 'transparent',
          border: 'none',
        },
      },
      '& :hover': {
        backgroundColor: 'transparent',
        border: 'none',
      },

      '& fieldset': {
        // borderTopLeftRadius: 0,
        // borderBottomLeftRadius: 0,
        border: 'none',
      },

      '& .MuiInputBase-input::placeholder': {
        // color: palette.text.secondary,
        // fontWeight: typography.fontWeightRegular,
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
    searchIcon: {
      width: '20px',
      height: '20px',
      // color: palette.grey['A700'],
    },
  };
};
