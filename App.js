import React from 'react';
import Router from './src/Navigation/Router';
import {AppProvider} from './src/Components/Context/Context';

const App = () => {
  return (
    <AppProvider>
      <Router></Router>
    </AppProvider>
  );
};

export default App;
