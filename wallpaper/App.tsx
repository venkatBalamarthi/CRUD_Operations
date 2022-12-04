import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTE_NAMES, SCREEN_NAMES } from './Src/AppConfig/Router';
import { Provider } from 'react-redux';
import { getConfigureStore } from './Src/AppConfig/Redux/Store';
const Stack = createStackNavigator();
const { store } = getConfigureStore()
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREEN_NAMES.WALLPAPER}
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}>
          {ROUTE_NAMES.map(route => {
            return (
              <Stack.Screen
                key={route.key}
                name={route.name}
                component={route.component}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
};

export default App;