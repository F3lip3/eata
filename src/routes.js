import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import SignIn from './pages/SignIn';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2AB7CA'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'EATA' }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'EATA' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
