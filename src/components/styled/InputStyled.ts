import { TextField, styled } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField';
import { CSSObject } from '@mui/material/styles';

interface StyledTextFieldProps
  extends Omit<
    TextFieldProps,
    'inputRef' | 'onChange' | 'onBlur' | 'onFocus' | 'onKeyDown'
  > {
  inputRef?: TextFieldProps['inputRef'];
  onChange?: TextFieldProps['onChange'];
  onBlur?: TextFieldProps['onBlur'];
  onFocus?: TextFieldProps['onFocus'];
  onKeyDown?: TextFieldProps['onKeyDown'];
}

export const InputStyled = styled(TextField)<StyledTextFieldProps>(
  ({ theme }): CSSObject => ({
    '& .MuiInputBase-input': {
      padding: '12px',
      borderRadius: theme.shape.borderRadius,
      fontSize: '14px',
      height: '22px',
    },
    '& .MuiFormLabel-root': {
      fontSize: '12px',
    },
    '& fieldset': {
      borderRadius: theme.shape.borderRadius,
      borderColor: theme.palette.divider,
    },
    borderRadius: theme.shape.borderRadius,
  }),
);
