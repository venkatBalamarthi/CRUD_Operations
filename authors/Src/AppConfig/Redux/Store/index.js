import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import asyncStorage from '../../AsyncStorage';
import rootReducer from '../Reducers/index';
let store = null;
let persistor = null;

const persistConfig = {
  key: 'root',
  storage: asyncStorage,
};

const configureStore = () => {
  const enhancer = compose(applyMiddleware(thunk));
  const persistRootReducer = persistReducer(persistConfig, rootReducer);
  store = createStore(persistRootReducer, enhancer);
  persistor = persistStore(store);
  return {store, persistor, dispatch: store && store?.dispatch};
};
export const getConfigureStore = () => {
  if (store === null) {
    return configureStore();
  } else {
    return {
      store,
      persistor,
      dispatch: store && store?.dispatch,
    };
  }
};
