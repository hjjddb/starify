import React from 'react';
import styled from 'styled-components'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-view';

import { TextButton, BigRoundedButton } from '../../src/components/toucable';
import { BigRoundedButtonText, BoldText } from '../../src/components/text'
// import { SignUpScreen } from '../../src/screens/signUp'

export default function OnboardingScreen({ navigation }) {
  const pressSignUpHandler = () => {
    navigation.push('SignUpScreen')
  }

  const pressSignInHandler = () => {
    navigation.push('SignInScreen')
  }

  return (
    <View>
      <BigRoundedButton
        onPress={pressSignUpHandler}>
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
    </View >
  )
}

// export default OnboardingScreen