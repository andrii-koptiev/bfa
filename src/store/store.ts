import { RematchDispatch, RematchRootState, init } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import selectPlugin from '@rematch/select';
import { useDispatch } from 'react-redux';

import { RootModel, models } from './models';

type FullModel = ExtraModelsFromLoading<RootModel>;

export const store = init<RootModel, FullModel>({
  models,
  plugins: [loadingPlugin(), immerPlugin(), selectPlugin()],
});
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;

export const useAppDispatch = (): Dispatch => {
  return useDispatch<Dispatch>();
};
