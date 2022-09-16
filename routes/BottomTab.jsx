import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../src/screens';
import SettingsStack from './SettingsStack';

const {Screen, Navigator} = createBottomTabNavigator();
export default () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} options={{}} />
      <Screen name="Settings" component={SettingsStack} />
    </Navigator>
  );
};
