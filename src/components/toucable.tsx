import styled from 'styled-components'
import { View, TouchableOpacity, Button } from 'react-native'

export const TextButton = styled(View)`
  line-height: 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justifyContent: center;
  position: relative;
  width: 274px;
  height: 24px;
  margin-bottom: 10%
  margin-left: auto
  margin-right: auto

  color: rgba(0, 0, 0, 0.5)
`

export const BigRoundedButton = styled(TouchableOpacity)`
  position: relative;
  padding-top:15;
  padding-bottom:15;
  margin-top: 150%
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25;
  align-items: center;
  text-align: center;
  justifyContent: center;
  border-color: rgb(131, 61, 180);
  background-color: rgb(131, 61, 180);
`