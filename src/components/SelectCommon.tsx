import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  SvgIconProps,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { SelectProps } from '@mui/material/Select/Select';
import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { OptionSelectInterface } from '../interfaces';
import { STYLES_CONSTANTS, slugFormatter } from '../utils';
import { useSelectCommonStyles } from './styles-hooks';

interface Props extends SelectProps {
  options: OptionSelectInterface[];
  helperText?: string;
  minHeight?: string | number;
  maxOptionsMenuHeight?: string | number;
  inputInfoEl?: JSX.Element | null;
  readonly?: boolean;
}

const SelectCommon: FC<Props> = ({
  name,
  value,
  label,
  disabled = false,
  options,
  onChange,
  color = 'primary',
  error,
  helperText,
  required = false,
  defaultValue,
  minHeight = STYLES_CONSTANTS.INPUT_MIN_HEIGHT,
  maxOptionsMenuHeight = STYLES_CONSTANTS.SELECT_COMMON_MAX_OPTIONS_MENU_HEIGHT,
  inputInfoEl = null,
  readonly = false,
}) => {
  const { t } = useTranslation();
  const styles = useSelectCommonStyles({
    minHeight,
    maxOptionsMenuHeight,
    isDisabled: disabled,
    disabledOpacity: STYLES_CONSTANTS.SELECT_COMMON_DISABLED_OPACITY,
  });
  const labelId = `select-common-${slugFormatter(name)}-label-id`;

  const optionsList = useMemo(() => {
    if (!options.length) {
      return (
        <MenuItem
          key='no-option'
          value=''
          disabled
          data-testid='select-common-no-options'
        >
          {t('select_common_empty_options')}
        </MenuItem>
      );
    }

    return options.map((options) => {
      if (options.id !== '') {
        return (
          <MenuItem
            key={options.id}
            value={options.id}
            data-testid='select-common-option'
          >
            {options.name}
          </MenuItem>
        );
      }

      return '';
    });
  }, [options, t]);

  const iconElement = (props: SvgIconProps) => (
    <>
      {inputInfoEl ? (
        <>
          <Box sx={styles.inputIcon}>
            <KeyboardArrowDownRoundedIcon {...props} />
          </Box>
          <Box sx={styles.infoIcon}>{inputInfoEl}</Box>
        </>
      ) : (
        <KeyboardArrowDownRoundedIcon {...props} />
      )}
    </>
  );

  return (
    <FormControl fullWidth sx={styles.inputWithError}>
      <InputLabel
        sx={styles.label}
        id={labelId}
        color={color}
        error={error}
        required={required}
        data-testid='select-common-label'
      >
        {label}
      </InputLabel>

      <Select
        error={error}
        labelId={labelId}
        name={name}
        color={color}
        value={value}
        label={label}
        disabled={disabled}
        onChange={onChange}
        IconComponent={(props) => iconElement(props)}
        defaultValue={defaultValue}
        MenuProps={{
          PaperProps: { sx: styles.paper },
        }}
        inputProps={{ readOnly: readonly }}
        sx={styles.select}
        data-testid={`select-common-${slugFormatter(name)}`}
      >
        {optionsList}
      </Select>

      <FormHelperText
        error={Boolean(error) && Boolean(helperText)}
        data-testid='select-common-helper-text'
      >
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default SelectCommon;
