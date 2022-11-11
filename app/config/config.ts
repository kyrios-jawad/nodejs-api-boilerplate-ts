import { env } from '../utils/env';
import { toBool } from '../utils/to-bool';
export const config = {
  isProduction: env('NODE_ENV') === 'production',
  isStaging: env('NODE_ENV') === 'staging',
  isDevelopment: env('NODE_ENV') === 'development',
  name: env('APP_NAME'),
  port: Number(env('PORT')),
  routePrefix: env('ROUTE_PREFIX'),
  url: env('URL'),
};
