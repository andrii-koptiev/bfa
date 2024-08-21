import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, SelectChangeEvent, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DebouncedFunc } from 'lodash';
import React, { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { OptionSelectInterface } from '../interfaces';
import { STYLES_CONSTANTS, slugFormatter } from '../utils';
import { InputStyled } from './styled';
import { useSearchSelectCommonStyles } from './styles-hooks';

type Props = {
  options: OptionSelectInterface[];
  // selectedValue: OptionSelectInterface | null;
  // onSelectionChange: (optionId: OptionSelectInterface['id']) => void;
  label: string;
  placeholderText?: string;
  onSearch?: DebouncedFunc<
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  >;
  isInputTouched?: boolean;
};

const AutocompleteCommon: FC<Props> = ({
  options,
  // selectedValue,
  // onSelectionChange,
  label,
  placeholderText,
  onSearch,
  isInputTouched = false,
}) => {
  return (
    <Autocomplete
      sx={{ minHeight: STYLES_CONSTANTS.INPUT_MIN_HEIGHT }}
      freeSolo
      id='free-solo-2-demo'
      disableClearable
      options={options.map((option) => option.name)}
      renderInput={() => (
        <InputStyled
          label={label}
          name='orderNumber'
          value={2}
          onChange={() => {}}
          error={false}
          helperText={'aaa'}
          required
        />
      )}
    />
  );
};

export default AutocompleteCommon;
