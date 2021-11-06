import persistPlugin from '@rematch/persist';
import { init } from '@rematch/core';
import storage from 'redux-persist/lib/storage';
import * as models from './models';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['layout'],
  //blacklist,
  version: 2,
};

const store = init({
  plugins: [persistPlugin(persistConfig /*, callback */)],
  models,
});

export default store;
