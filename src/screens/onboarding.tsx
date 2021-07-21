import React from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, SafeAreaView } from 'react-native';

import { BigRoundedButton } from '../../src/components/touchable';
import { BigRoundedButtonText } from '../../src/components/text'

export default function OnboardingScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={{ flexDirection: 'column', height: '100%' }}>
      <View style={{ height: '8%' }} />
      <View style={{ height: '3%' }}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={switchStyles.switch}
        />
      </View>
      <View style={{ height: '68%' }} />
      <View style={{ height: '5%' }}>
        <BigRoundedButton
          onPress={() => { navigation.push('SignUpScreen') }}
          style={buttonStyles.signUpButton} >
          <BigRoundedButtonText>
            Let's get started
          </BigRoundedButtonText>
        </BigRoundedButton>
      </View>
      <View style={{ height: '3.5%' }} />
      <View style={{ height: '3.5%' }}>
        <View style={buttonStyles.signInButton}>
          <Text>Already have account?</Text>
          <TouchableOpacity
            onPress={() => { navigation.push('SignInScreen') }}>
            <Text style={{ fontWeight: 'bold' }}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  )
}

const switchStyles = StyleSheet.create({
  switch: {
    marginLeft: '80%',
    marginRight: '10%',
  },
})

const buttonStyles = StyleSheet.create({
  signUpButton: {
  },
  signInButton: {
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
  },
})

// export default OnboardingScreen