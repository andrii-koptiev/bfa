import SearchIcon from '@mui/icons-material/Search';
import { SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DebouncedFunc } from 'lodash';
import React, { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { OptionSelectInterface } from '../interfaces';
import { slugFormatter } from '../utils';
import { InputStyled } from './styled';
import { useSearchSelectCommonStyles } from './styles-hooks';

type Props = {
  options: OptionSelectInterface[];
  selectedValue: OptionSelectInterface | null;
  onSelectionChange: (optionId: OptionSelectInterface['id']) => void;
  label: string;
  placeholderText?: string;
  onSearch?: DebouncedFunc<
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  >;
  isInputTouched?: boolean;
};

const SearchSelectCommon: FC<Props> = ({
  options,
  selectedValue,
  onSelectionChange,
  label,
  placeholderText,
  onSearch,
  isInputTouched = false,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<
    OptionSelectInterface['id'] | null
  >(null);
  const { t } = useTranslation();
  const styles = useSearchSelectCommonStyles();

  const optionsList = useMemo(() => {
    if (!options.length) {
      return (
        <MenuItem
          key='no-option'
          value=''
          disabled
          data-testid='search-select-common-no-options-menu-item'
        >
          {t('select_common_empty_options')}
        </MenuItem>
      );
    }

    return options.map((option) => (
      <MenuItem
        key={option.id}
        value={option.id}
        sx={styles.menuItem}
        data-testid={`search-select-common-${slugFormatter(
          option.name,
        )}-menu-item`}
      >
        {option.name}
      </MenuItem>
    ));
  }, [options, styles.menuItem, t]);

  useEffect(() => {
    selectedValue && setSelectedOptionId(selectedValue.id);
  }, [selectedValue]);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Select
          label={label}
          sx={styles.select}
          disableUnderline
          variant='filled'
          name='search-select-common-select'
          value={selectedOptionId || ''}
          SelectDisplayProps={{
            style: {
              paddingTop: 8,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            },
          }}
          MenuProps={{
            PaperProps: { sx: styles.paper },
          }}
          onChange={(event: SelectChangeEvent) => {
            setSelectedOptionId(event.target.value);
            onSelectionChange(event.target.value);
          }}
          data-testid='search-select-common-select'
        >
          {optionsList}
        </Select>
        <InputStyled
          sx={styles.input}
          minheight='inherit'
          placeholder={placeholderText}
          onChange={onSearch}
          InputProps={{
            startAdornment: (
              <SearchIcon
                fontSize='small'
                sx={styles.searchIcon}
                data-testid='search-select-common-icon'
              />
            ),
          }}
          inputRef={(input) => input && isInputTouched && input.focus()}
          data-testid='search-select-common-search-input'
        />
      </Box>
    </Box>
  );
};

export default SearchSelectCommon;
