export const ENV_TYPE_PRODUCTION = 'production';
export const ENV_TYPE = process.env.NODE_ENV;

const REACT_APP_HOST_API = 'HOST_API';

export const getEnvironmentVariable = variable => process.env[`REACT_APP_${variable}`];
export const isProduction = () => ENV_TYPE_PRODUCTION === ENV_TYPE;

export const HOST_API = getEnvironmentVariable(REACT_APP_HOST_API);
