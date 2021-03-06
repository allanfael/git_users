import React from 'react';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2E86C1" />
      <Routes />
    </>
  );
};

export default App;
