export const REQUEST = 'request';
export const UPDATE = 'update';

export const REQUEST_ACTION_TYPE = 'pending';
export const SUCCESS_ACTION_TYPE = 'fulfilled';
export const FAILURE_ACTION_TYPE = 'rejected';

export const processing = {
  [REQUEST]: 'Requesting',
  [UPDATE]: 'Updating',
};

export const processed = {
  [REQUEST]: 'Requested',
  [UPDATE]: 'Updated',
};

export const error = {
  [REQUEST]: 'RequestError',
  [UPDATE]: 'UpdateError',
};
