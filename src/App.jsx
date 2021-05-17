import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import 'semantic-ui-css/semantic.min.css'

import AppRouter from 'Router/AppRouter';
import DomainProvider from 'Domain/Provider';

import './Assets/styles/main.scss';

function App() {
  return (
    <DomainProvider>
      <LoadingBar />
      <AppRouter />
    </DomainProvider>
  );
}

export default App;
