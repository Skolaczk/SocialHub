import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    APP_URL: z.string().url().optional(),
    API_URL: z.string().url().min(1),
  },
  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    API_URL: process.env.API_URL,
  },
});
