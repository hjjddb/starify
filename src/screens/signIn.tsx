import React from 'react';
import styled from 'styled-components'
import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity } from 'react-native';
// import { useFonts, Nunito_300Light } from '@expo-google-fonts/nunito'

import { BigRoundedButton } from '../../src/components/touchable';
import { BigRoundedButtonText, CenterText, HighlightText } from '../../src/components/text'
import { PasswordInput, PhoneNumberInput, PhoneNumberPicker } from '../../src/components/input'
import { TextButton } from '../../src/components/button'

export default function SignInScreen({ navigation }) {
  // let [fontsLoaded] = useFonts(
  //   (Nunito_300Light)
  // );

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: '+84', value: '84' },
    { label: '+1', value: '1' }
  ]);

  return (
    <SafeAreaView>
      <Text style={textStyle.greedings}>Good morning!</Text>
    </SafeAreaView>
    //   <View style={{
    //     flexDirection: "row",
    //     justifyContent: "center"
    //   }}>
    //     <PhoneNumberPicker
    //       placeholder={'+84'}
    //       placeholderStyle={{ fontSize: 24 }}
    //       open={open}
    //       value={value}
    //       items={items}
    //       setOpen={setOpen}
    //       setValue={setValue}
    //       setItems={setItems}
    //       disableBorderRadius={true}
    //       disabledStyle={{
    //         opacity: 0.5
    //       }}
    //       containerStyle={{
    //         borderWidth: 0
    //       }}
    //     />
    //     <PhoneNumberInput
    //       placeholder="your phone number"
    //       autoFocus={true}>
    //     </PhoneNumberInput>
    //   </View>
    //   <View>
    //     <PasswordInput placeholder='your password'></PasswordInput>
    //     <Button title="Forgot password" onPress={() => { navigation.push('ForgotScreen') }}></Button>
    //     <SignInButton>
    //       <BigRoundedButtonText>
    //         SIGN IN
    //       </BigRoundedButtonText>
    //     </SignInButton>
    //     <TextButton>
    //       <Text>Dont't have an account? </Text>
    //       <TouchableOpacity onPress={() => { navigation.push('SignUpScreen') }}>
    //         <HighlightText>Sign up</HighlightText>
    //       </TouchableOpacity>
    //     </TextButton>
    //   </View>

    // </SafeAreaView >
  )
}

const SignInButton = styled(BigRoundedButton)`
  margin-top: 100%;
`

const textStyle = StyleSheet.create({
  greedings: {
    marginLeft: 'auto',
    marginRight: 'auto',

    fontSize: 20,
    fontWeight: '600'
  }
})