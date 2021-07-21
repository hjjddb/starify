import React from 'react';
import styled from 'styled-components'
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { BigRoundedButton } from '../../src/components/touchable';
import { BigRoundedButtonText, BoldText, CenterText } from '../../src/components/text'
import { PhoneNumberInput, PhoneNumberPicker } from '../../src/components/input'

export default function SignUpScreen({ navigation }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: '+84', value: '84' },
    { label: '+1', value: '1' }
  ]);


  return (
    <SafeAreaView>
      {/* <VerifyText>
        Verify your phone number to start
      </VerifyText>
      <View style={{
        flexDirection: "row",
        justifyContent: "center"
      }}>
        <PhoneNumberPicker
          placeholder={'+84'}
          placeholderStyle={{ fontSize: 24 }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          disableBorderRadius={true}
          disabledStyle={{
            opacity: 0.5
          }}
          containerStyle={{
            borderWidth: 0
          }}
        >
        </PhoneNumberPicker>
        <PhoneNumberInput
          placeholder="your phone number"
          autoFocus={true}>
        </PhoneNumberInput>
      </View>
      <Text style={textStyles.termPolicy}>
        {/* By clicking Sign up, you agree to our */}
      {/* <TextButton> Terms of Use </TextButton>
        <Text> and Privacy Policy</Text>
      </Text>
      <SignUpButton>
        <BigRoundedButtonText>
          SIGN UP
        </BigRoundedButtonText>
      </SignUpButton> */}
    </SafeAreaView >
  )
}

const textStyles = StyleSheet.create({
  termPolicy: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  SignUpButton: {
    marginTop: "150%"
  }
})

const SignUpButton = styled(BigRoundedButton)`
  margin-top: 130%;
`

const VerifyText = styled(CenterText)`
  margin-top: 10%;
  
  font-size: 16;
  align-items: center;
  text-align: center;
`