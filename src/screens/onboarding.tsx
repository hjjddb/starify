import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components'
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import SwipeButton from 'rn-swipe-button';

import { TextButton, BigRoundedButton } from '../../src/components/toucable';
import { BigRoundedButtonText, BoldText } from '../../src/components/text'

export default function OnboardingScreen({ navigation }) {
  const pressSignUpHandler = () => {
    navigation.push('SignUpScreen')
  }

  const pressSignInHandler = () => {
    navigation.push('SignInScreen')
  }

  return (
    <SafeAreaView>
      <BigRoundedButton onPress={pressSignUpHandler}>
        <BigRoundedButtonText>
          Let's get started
        </BigRoundedButtonText>
      </BigRoundedButton>
      <TextButton>
        <Text>Already have account? </Text>
        <TouchableOpacity onPress={pressSignInHandler} >
          <BoldText>Sign in</BoldText>
        </TouchableOpacity>
      </TextButton>
    </SafeAreaView >
  )
}

// export default OnboardingScreen