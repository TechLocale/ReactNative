import { createStackNavigator } from 'react-navigation';

import MainLoginScreen from './MainLoginScreen';
import LoginScreen from './LoginScreen';
import DetailScreen from './DetailScreen';
import InterestScreen from './InterestScreen';

export default createStackNavigator({
    MainLogin: { screen: MainLoginScreen},
    Login: { screen: LoginScreen},
    Details: { screen: DetailScreen},
    Interest: { screen: InterestScreen}
  });