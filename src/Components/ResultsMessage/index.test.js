import React from 'react';
import { mount } from 'enzyme';

import { findByTestAttribute } from '../../test/testUtils';

import ResultsMessage, { calculateResult } from './index';
import { EXTROVERT, INTROVERT } from 'Constants/results';

const introvertAnswersMock = { 'q1': 1, 'q2': 1, 'q3': 1 };
const extrovertAnswersMock = { 'q1': 4, 'q2': 3, 'q3': 4 };
const numberOfAnswers = 3;

const defaultProps = { answers: introvertAnswersMock, testsCount: numberOfAnswers };

const setup = (props) => {
  const wrapper = mount(<ResultsMessage {...props} />);
  return wrapper;
}

describe('Results Page with props', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(defaultProps);
  });

  test('Calculate method returns introvert', () => {
    const state = calculateResult(introvertAnswersMock, numberOfAnswers);
    expect(state).toBe(INTROVERT);
  });

  test('Calculate method returns extrovert', () => {
    const state = calculateResult(extrovertAnswersMock, numberOfAnswers);
    expect(state).toBe(EXTROVERT);
  });

  test('Results text rendred', () => {
    const comp = findByTestAttribute(wrapper, 'component-wrapper');
    expect(comp.length).toBe(1);
  });

  test('Check final state', () => {
    const comp = findByTestAttribute(wrapper, 'component-result');
    expect(comp.text()).toBe('Introvert');
  });
});
