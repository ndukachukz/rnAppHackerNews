/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Provider as PaparProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './src/store';
import SplashScreen from 'react-native-splash-screen';
import Routes from './routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaparProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PaparProvider>
  );
};

export default App;
