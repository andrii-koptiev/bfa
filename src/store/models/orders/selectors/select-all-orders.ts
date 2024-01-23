import { createSelector } from '@rematch/select';

import { RootState } from '../../../store';
import { OrdersStateType } from '../types';

export const selectAllOrders = createSelector(
  (rootState: RootState) => rootState.orders,
  (state): OrdersStateType['orders'] => state.orders,
);
