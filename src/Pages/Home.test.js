import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttribute } from '../test/testUtils';

import Home from './Home';

const setup = () => {
  const wrapper = shallow(<Home />);
  return wrapper;
}

describe('Home Page', () => { 
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('Home Page Loaded', () => {
    const comp = findByTestAttribute(wrapper, 'component-wrapper');
    expect(comp.length).toBe(1);
  });

  test('Info Test Rendered', () => {
    const comp = findByTestAttribute(wrapper, 'component-start-button');
    expect(comp.length).toBe(1);
  });

  test('Start Test Button Visibility', () => {
    const comp = findByTestAttribute(wrapper, 'component-start-button');
    expect(comp.length).toBe(1);
  });

});
