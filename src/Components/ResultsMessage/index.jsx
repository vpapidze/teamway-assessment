import React, { useEffect, useState } from 'react';

import Message from 'Components/Common/Message';

import { MAX_TEST_ITEM_SCORE, EXTROVERT, INTROVERT } from 'Constants/results';

export const calculateResult = (answers, testsCount) => {
  const maxScore = testsCount * MAX_TEST_ITEM_SCORE;
  const userScores = Object.keys(answers).map(i => answers[i]);
  const sumOfUserScores = userScores.reduce((a, b) => a + b, 0);
  if (sumOfUserScores <= maxScore / 2) {
    return INTROVERT;
  }
  return EXTROVERT;
}

const ResultsMessage = ({ answers, testsCount }) => {
  const [finalState, setFinalState] = useState(null);

  useEffect(res => {
    setFinalState(calculateResult(answers, testsCount));
  }, [answers, testsCount]);

  return (finalState ? <div
    className="results-wrapper"
    data-test="component-wrapper">
    <Message
      message="Results"
      note={<span>You are "<span data-test="component-result">{finalState === INTROVERT ? "Introvert" : "Extrovert"}</span>"</span>}
      positive
    />
  </div> : null);
}

export default ResultsMessage;
