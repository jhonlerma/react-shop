import React from 'react';

import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';

import '../styles/global.scss';
const App = () => {
  return (
    <Layout>
      <Login />
      <RecoveryPassword></RecoveryPassword>
    </Layout>
  )
}

export default App