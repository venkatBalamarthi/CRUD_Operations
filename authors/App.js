/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {getConfigureStore} from './Src/AppConfig/Redux/Store';
import AppRouter from './Src/AppConfig/Router/AppRouter';
import {SCREEN_NAMES} from './Src/AppConfig/Router/ScreenNames';
const {store, persistor} = getConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter initialRouteName={SCREEN_NAMES.AUTHORS} />
      </PersistGate>
    </Provider>
  );
};

export default App;
