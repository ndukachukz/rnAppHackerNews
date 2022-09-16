import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomTab';

/* have your bottom nav here */
const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default Routes;
