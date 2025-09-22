import { config } from 'dotenv';

config({ path: `.env` });

export const {
  PORT, NODE_ENV, SERVER_URL,
  MONGODB_URI,
  JWT_SECRET, JWT_EXPIRES_IN
} = process.env;