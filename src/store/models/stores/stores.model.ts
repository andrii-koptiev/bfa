import { createModel } from '@rematch/core';
import { AxiosError } from 'axios';

import { createStore, getStores } from '../../../api';
import {
  CreateStorePayloadInterface,
  StoreMappedInterface,
} from '../../../interfaces';
import { mapFromApi } from '../../../utils';
import { RootModel } from '../index';
import { StoresStateType } from './types';

export const storesModel = createModel<RootModel>()({
  state: {
    stores: [],
  } as StoresStateType,
  reducers: {
    setStores(state, stores: StoreMappedInterface[]) {
      state.stores = stores;
    },
  },
  effects: (dispatch) => ({
    async getStores() {
      const stores = await getStores()
        .then((res) => mapFromApi(res.data))
        .catch((e: AxiosError<{ message: string }>) => {
          throw new Error(e.message);
        });

      await dispatch.stores.setStores(stores);
    },

    async createStore(payload: CreateStorePayloadInterface) {
      await createStore(payload).catch((e: AxiosError<{ message: string }>) => {
        throw new Error(e.message);
      });
    },
  }),
});
