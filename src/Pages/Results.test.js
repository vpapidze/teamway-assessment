import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import { findByTestAttribute, storeFactory } from '../test/testUtils';

import { ResultsWrapper } from './Results';

const setup = (intialState = {}) => {
  const store = storeFactory(intialState);
  const wrapper = mount(<Provider store={store}>
    <Router>
      <ResultsWrapper history={{ push: () => { } }} />
    </Router>
  </Provider>);
  return wrapper;
}

describe('Results Page Wrapper', () => {
  let wrapper;
  beforeEach(() => {
    const initState = {
      results: {
        finished: true,
        answers: {}
      }
    };
    wrapper = setup(initState);
  });

  test('If page loads', () => {
    const comp = findByTestAttribute(wrapper, 'results-component-wrapper');
    expect(comp.length).toBe(1);
  });
});
