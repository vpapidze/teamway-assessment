import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { node } from 'prop-types';

import store from 'Config/store';

const Provider = ({ children }) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
