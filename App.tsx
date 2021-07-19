import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { TextButton, BigRoundedButton } from './src/components/toucable';
import { BigRoundedButtonText, BoldText } from './src/components/text'
import OnboardingScreen from './src/screens/onboarding'
import SignUpScreen from './src/screens/signUp';
import SignInScreen from './src/screens/signIn'
import ForgotScreen from './src/screens/forgot'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ title: "Onboarding" }} />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: "Let's get started" }} />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ title: "Let's get started" }} />
        <Stack.Screen
          name="ForgotScreen"
          component={ForgotScreen}
          options={{ title: "Account recovery" }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
