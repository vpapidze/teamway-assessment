import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Button } from 'semantic-ui-react';

import Tests from 'Components/Tests';

import { HOME, RESULTS } from 'Router/route-definitions';

const TestsPage = () => {
  const { finished } = useSelector(state => state.results);

  return (finished ? <Redirect to={RESULTS} push={true} /> :
    <div data-test="tests-component-wrapper">
      <Container className="tests-continer">
        <Button primary as={Link} to={HOME}>
          Back
      </Button>
        <Tests />
      </Container>
    </div>);
};

export default TestsPage;
