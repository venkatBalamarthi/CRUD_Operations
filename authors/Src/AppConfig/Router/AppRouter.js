import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTER_NAMES from './RouterConstants';
import {navigationRef} from './RootNavigationRef';
const Stack = createStackNavigator();

const AppRouter = ({initialRouteName = ''}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        {ROUTER_NAMES.map(route => {
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
  );
};

export default AppRouter;
