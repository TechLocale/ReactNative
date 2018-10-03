import { createSwitchNavigator} from 'react-navigation';

import LoadingScreen from './Screens/LoadingScreen';
import AppStack from './Screens/AppStack';
import AuthStack from './Screens/Authentication/AuthStack';

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading'
  }
);