import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginForm from './screens/loginForm/index';
import RegisterForm from './screens/registerForm/index';

const stack = createStackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerShown: false
    }
  },
  Register: {
    screen: RegisterForm,
    navigationOptions: {
      headerShown: false
    }
  }
}, {
  defaultNavigationOptions: {

  }
});

const Routes = createAppContainer(stack);

export default Routes;
