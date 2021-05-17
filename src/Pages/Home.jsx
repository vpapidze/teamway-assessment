import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Header } from 'semantic-ui-react'

import { TESTS } from 'Router/route-definitions';

const Home = () => {
  return <Container textAlign="center" className='main-conatiner' data-test="component-wrapper">
    <Header as="h2" icon textAlign="center">
      <Header.Content data-test="component-info-test">Welcome to test Page</Header.Content>
    </Header>
    <Button primary as={Link} to={TESTS} data-test="component-start-button">
      Start Test
    </Button>
  </Container>
};

export default Home;
