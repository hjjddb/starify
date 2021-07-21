import styled from 'styled-components'
import { Text } from 'react-native'
import { BigRoundedButton } from './touchable'

export const BoldText = styled(Text)`
  font-weight: bold !important;
`

export const BigRoundedButtonText = styled(Text)`
  color: rgb(255, 255, 255);
  font-style: normal;
  font-weight: 600;
  text-align: center;
`

export const CenterText = styled(Text)`
  margin-left: auto;
  margin-right: auto;
`

export const HighlightText = styled(Text)`
  color: #833DB4
`