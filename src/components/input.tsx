import styled from 'styled-components'
import DropDownPicker from 'react-native-dropdown-picker'
import { TextInput } from 'react-native'

export const PhoneNumberPicker = styled(DropDownPicker)`
  margin-top: 5%;
  margin-left: 22%;
  width: 22%;
`

export const PhoneNumberInput = styled(TextInput)`
  margin-top: 5%;
  margin-left: auto;
  margin-right: 15%;

  font-size: 20;
`

export const PasswordInput = styled(TextInput)`
  margin-top: 5%;
  margin-left: 45%;
  margin-right: auto;

  font-size: 20;
`