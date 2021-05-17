import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

 import rootReducer from '../Domain/rootReducer';
// import { middlwwares } from '../src/configureStore';

export const storeFactory = (init) => {
  //const crtwith = applyMiddleware([])(createStore);
  return createStore(rootReducer, init);
}

export const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

export const checkProps = (component, confProps) => {
  const propError = checkPropTypes(component.propTypes,
    confProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}
