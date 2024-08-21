import { createSelector } from '@rematch/select';

import { RootState } from '../../../store';
import { StoresStateType } from '../types';

export const selectAllStores = createSelector(
  (rootState: RootState) => rootState.stores,
  (state): StoresStateType['stores'] => state.stores,
);
