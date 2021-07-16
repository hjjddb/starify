import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components'
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { TextButton, BigRoundedButton } from './src/components/toucable';
import { BigRoundedButtonText, BoldText } from './src/components/text'
import OnboardingScreen from './src/screens/onboarding'
import Navigator from './routes/LoggingStack'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Navigator></Navigator>
    // <Text>Test</Text>
  );
}
