import { filter } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

export const useLocalSearch = <RowType extends { [key: string]: any }>(
  data: RowType[],
  searchKeys?: string[],
) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<RowType[]>([]);
  // State controls input focus for GridFilterBarShared if user searched in grid
  const [isInputTouched, setIsInputTouched] = useState(false);

  useEffect(() => {
    setSearchResult([]);

    if (data.length && searchQuery) {
      searchItems();
      setIsInputTouched(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, data]);

  const isRowValuesIncludesQuery = useCallback(
    (rowObject: RowType, query: string, searchKeys?: string[]): boolean => {
      if (!searchKeys) {
        searchKeys = Object.keys(rowObject);
      }

      const matches = filter(searchKeys, (key) => {
        const value = rowObject[key];
        return String(value).toLowerCase().includes(query);
      });

      return matches.length > 0;
    },
    [,
  );

  const searchItems = useCallback(() => {
    const query = searchQuery.toLowerCase();

    const filteredData = data.filter((item) =>
      isRowValuesIncludesQuery(item, query, searchKeys)
    );

    setSearchResult(filteredData);
  }, [data, isRowValuesIncludesQuery, searchQuery, searchKeys]);

  return {
    searchResult,
    setSearchQuery,
    searchQuery,
    isInputTouched,
    setIsInputTouched
  };
};