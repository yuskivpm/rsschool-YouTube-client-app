import { Environment } from './environment.model';
require('dotenv').config();

export const environment: Environment = {
  production: true,
  API_KEY: process.env.API_KEY,
};
