import Home from 'Pages/Home';
import Tests from 'Pages/Tests';
import Results from 'Pages/Results';

import {
  HOME,
  TESTS,
  RESULTS
} from './route-definitions';

export default [
  { path: HOME, component: Home },
  { path: TESTS, component: Tests },
  { path: RESULTS, component: Results },
];
