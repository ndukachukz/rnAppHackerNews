import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {
  Settings,
  Login as LoginScreen,
  Signup as SignupScreen,
  About as AboutScreen,
} from '../src/screens';
import {createTable} from '../src/services';

const {Screen, Navigator} = createNativeStackNavigator();

export default () => {
  useEffect(() => {
    createTable();
  }, []);
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Settings" component={Settings} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Signup" component={SignupScreen} />
      <Screen name="About" component={AboutScreen} />
    </Navigator>
  );
};
