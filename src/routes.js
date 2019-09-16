import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main/index';
import User from './pages/User/index';
import MyWeb from './pages/WebView';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      MyWeb,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#2E86C1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
