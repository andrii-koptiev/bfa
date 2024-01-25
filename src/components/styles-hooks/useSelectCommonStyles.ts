import { useTheme } from '@mui/material/styles';

type SelectCommonProps = {
  isDisabled: boolean;
  disabledOpacity: string | number;
  minHeight: string | number;
  maxOptionsMenuHeight: string | number;
};

export const useSelectCommonStyles = ({
  isDisabled,
  disabledOpacity,
  minHeight,
  maxOptionsMenuHeight,
}: SelectCommonProps) => {
  const { shadows } = useTheme();

  return {
    select: {
      '& .MuiInputBase-input': {
        padding: '12px',
        fontSize: 12,
        height: '22px',
      },
    },
    label: {
      '& .MuiFormLabel-root, &.MuiInputLabel-root': {
        opacity: isDisabled ? disabledOpacity : '100%',
        fontSize: 12,
      },
    },
    inputWithError: {
      minHeight: minHeight,
    },
    paper: {
      boxShadow: shadows[1],
      maxHeight: maxOptionsMenuHeight,
      '& .MuiMenuItem-root': {
        fontSize: 14,
      },
    },
    inputIcon: {
      position: 'absolute',
      right: '37px',
    },
    infoIcon: {
      position: 'absolute',
      right: '12px',
    },
  };
};
