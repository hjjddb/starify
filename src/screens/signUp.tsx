import React from 'react';
import styled from 'styled-components'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { TextButton, BigRoundedButton } from '../../src/components/toucable';
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
    <View>
      <VerifyText>
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

      <TextButton>
        <Text style={{
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}>
          By clicking Sign up, you agree to our Terms of Use and Privacy Policy
        </Text>
      </TextButton>
      <SignUpButton>
        <BigRoundedButtonText>
          SIGN UP
        </BigRoundedButtonText>
      </SignUpButton>
    </View >
  )
}

const SignUpButton = styled(BigRoundedButton)`
  margin-top: 130%;
`

const VerifyText = styled(CenterText)`
  margin-top: 10%;
  
  font-size: 16;
  align-items: center;
  text-align: center;
`