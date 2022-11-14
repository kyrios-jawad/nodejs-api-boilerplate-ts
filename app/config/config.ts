import { env } from '../utils/env';
export const config = {
  mode : env('NODE_ENV'),
  isProduction: env('NODE_ENV') === 'production',
  isStaging: env('NODE_ENV') === 'staging',
  isDevelopment: env('NODE_ENV') === 'development',
  name: env('APP_NAME'),
  port: Number(env('PORT')),
  routePrefix: env('ROUTE_PREFIX'),
  url: env('URL'),
};
