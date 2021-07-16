import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components'
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';

import { TextButton, BigRoundedButton } from '../../src/components/toucable';
import { BigRoundedButtonText, BoldText } from '../../src/components/text'

export default function SignInScreen({ navigation }) {
  const pressSignUpHandler = () => {
    navigation.navigate('SignUpScreen')
  }

  const pressSignInHandler = () => {
    navigation.navigate('SignInScreen')
  }

  return (
    <SafeAreaView>
      <Text>SignInScreen</Text>
    </SafeAreaView >
  )
}