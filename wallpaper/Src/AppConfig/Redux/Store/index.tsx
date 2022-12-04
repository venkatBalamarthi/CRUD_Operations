import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/index'
let store: any = null;

const configureStore = (): any => {
  const enhancer = compose(applyMiddleware(thunk));
  store = createStore(rootReducer, enhancer);
  return { store, dispatch: store && store?.dispatch };
};
export const getConfigureStore = () => {
  if (store === null) {
    return configureStore();
  } else {
    return {
      store,
      dispatch: store && store?.dispatch,
    };
  }
};

