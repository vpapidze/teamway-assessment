import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import { findByTestAttribute, storeFactory } from '../test/testUtils';

import Tests from './Tests';

const setup = (intialState = {}) => {
  const store = storeFactory(intialState);
  const wrapper = mount(<Provider store={store}>
    <Router>
      <Tests />
    </Router>
  </Provider>);
  return wrapper;
}

describe('Tests Page Wrapper', () => {
  let wrapper;
  beforeEach(() => {
    const initState = {
      results: {
        finished: false,
        answers: {}
      }
    };
    wrapper = setup(initState);
  });

  test('If page loads', () => {
    //console.log(wrapper.debug())
    const comp = findByTestAttribute(wrapper, 'tests-component-wrapper');
    expect(comp.length).toBe(1);
  });
});
