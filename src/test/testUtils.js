import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

 import rootReducer from '../Domain/rootReducer';

export const storeFactory = (init) => {
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
