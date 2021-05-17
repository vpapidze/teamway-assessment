import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button } from 'semantic-ui-react';

import ResultsMessage from '../Components/ResultsMessage';

import { HOME } from 'Router/route-definitions';

import { clearResults } from 'Domain/Slices/Results/resultsSlice';

export const ResultsWrapper = ({ history }) => {
  const dispatch = useDispatch();

  const { finished, answers } = useSelector(state => state.results);
  const { tests } = useSelector(state => state.tests);

  const clearResultsAndRedirectToHome = () => {
    dispatch(clearResults());
    history.push(HOME);
  }

  return (!finished ? <Redirect to={HOME} push={true} /> : <div data-test="results-component-wrapper">
    <Container textAlign="center" className='main-conatiner'>
      <ResultsMessage answers={answers} testsCount={tests.length} />
      <Button onClick={clearResultsAndRedirectToHome} data-test="back-button">
        Back To Home Page
      </Button>
    </Container>
  </div>);
};

export default withRouter(ResultsWrapper);
