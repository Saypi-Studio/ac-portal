/*
 * Part of the AC-Portal project.
 * Copyright (c) 2026 Academic Center of PSHS-CVisC in Cebu
 * All rights reserved.
 */
 
import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
  schema: './src/lib/server/db/schema.ts',
  out: './drizzle', // Directory for migrations
  dialect: 'postgresql',
  dbCredentials: { url: process.env.DATABASE_URL },
  verbose: true,
  strict: true
});
