import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { debounce } from 'lodash';
import { ChangeEvent, FC, memo } from 'react';

import { InputStyled } from './styled';

type Props = {
  onSearch: (value: string) => void;
  searchQuery: string;
  isInputTouched: boolean;
  searchPlaceholder?: string;
  onInputTouched?: (value: boolean) => void;
  inputWidth?: string | number;
};

const SearchCommon: FC<Props> = ({
  onSearch,
  searchQuery,
  searchPlaceholder,
  isInputTouched,
  inputWidth = '30%',
}) => {
  const { palette } = useTheme();

  const styles = {
    input: {
      width: inputWidth,

      '& .MuiInputBase-input::placeholder': {
        color: palette.text.secondary,
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
    searchIcon: {
      width: '20px',
      height: '20px',
      color: palette.grey['A700'],
    },
  };

  const handleSearch = debounce(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      onSearch(event.target.value);
    },
    300,
  );

  return (
    <Box height='64px' width='100%' display='flex' alignItems='center'>
      <InputStyled
        sx={styles.input}
        defaultValue={searchQuery}
        placeholder={searchPlaceholder}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <SearchIcon
              fontSize='small'
              sx={styles.searchIcon}
              data-testid='search-common-icon'
            />
          ),
        }}
        inputRef={(input) => input && isInputTouched && input.focus()}
        data-testid='search-common'
      />
    </Box>
  );
};

export default memo(SearchCommon);
