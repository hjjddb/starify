import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components'
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, TextInput, SectionList } from 'react-native';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { TextButton, BigRoundedButton } from '../../src/components/toucable';
import { BigRoundedButtonText, BoldText, CenterText } from '../../src/components/text'

export default function SignUpScreen({ navigation }) {
  const firstNumbers = [
    { name: 'Vietnam' },
  ]
  return (
    <SafeAreaView>
      <VerifyText>
        Verify your phone number to start
      </VerifyText>
      <View>
        <SectionList
          <PhoneNumberInput placeholder="your number phone"></PhoneNumberInput>
      </View>

    </SafeAreaView >
  )
}

const PhoneNumberInput = styled(TextInput)`
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
`

const VerifyText = styled(CenterText)`
  margin-top: 10%;
  
  font-size: 16;
  align-items: center;
  text-align: center;
`