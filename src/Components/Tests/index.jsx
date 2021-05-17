import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'semantic-ui-react'

import Loader from '../Common/Loader';
import Message from '../Common/Message';
import TestsForm from './TestsForm';

import { getTests } from 'Domain/Slices/Tests/testsSlice';

const Tests = () => {
  const dispatch = useDispatch();

  const { tests, getTestsRequesting, getTestsRequested, getTestsRequestError } = useSelector(state => state.tests);

  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);

  return <Container className="test-items-container">
    {getTestsRequesting && <Loader/>}
    {getTestsRequested && <TestsForm tests={tests} />}
    {getTestsRequestError && <Message negative message="Error Loading Data"/>}
  </Container>;
}

export default Tests;
