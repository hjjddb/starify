import styled from 'styled-components'
import { Text } from 'react-native'
import { BigRoundedButton } from './toucable'

export const BoldText = styled(Text)`
  font-weight: bold !important;
  text-align: center;
`

export const BigRoundedButtonText = styled(Text)`
  color: rgb(255, 255, 255);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`

export const CenterText = styled(Text)`
  margin-left: auto;
  margin-right: auto;
`