import axios from 'axios';
import pick from 'lodash/pick';
import MockAdapter from 'axios-mock-adapter';

import apiUrls from 'Config/api-urls';

import testMockData from './data-mock.json';

const mock = new MockAdapter(axios);

/** Mock tests API */
mock
  .onGet(`${apiUrls.host}${apiUrls.api.tests.getTests}`)
  .reply(200, testMockData);

const request = ({ method, body, route, host = apiUrls.host }) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const response = axios({
    method,
    url: host + route,
    headers,
    data: body,
  });

  return response
    .then(result => pick(result, ['data', 'status']))
    .catch(error => pick(error?.response, ['data', 'status']));
};

export default {
  get: params => request({ method: 'GET', ...params }),
  put: params => request({ method: 'PUT', ...params }),
  post: params => request({ method: 'POST', ...params }),
  patch: params => request({ method: 'PATCH', ...params }),
  delete: params => request({ method: 'DELETE', ...params }),
};
