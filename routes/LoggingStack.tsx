import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import OnboardingScreen from '../src/screens/onboarding'
import SignUpScreen from '../src/screens/signUp'
import SignInScreen from '../src/screens/signIn'

const screens = {
  OnboardingScreen: {
    screen: OnboardingScreen
  },
  SignUpScreen: {
    screen: SignUpScreen,
  },
  SignInScreen: {
    screen: SignInScreen,
  }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);