/*
 * Part of the AC-Portal project.
 * Copyright (c) 2026 Academic Center of PSHS-CVisC in Cebu
 * All rights reserved.
 */
 
import type { SupabaseClient, Session, User } from '@supabase/supabase-js'
import type { Database } from './database.types.ts' 

declare global {
	namespace App {
    interface Error {
      message: string
      code?: string
    }
    interface Locals {
      supabase: SupabaseClient<Database>
      getValidatedSession: () => Promise<{
        session: Session | null;
        user: User | null;
      }>
      session: Session | null
      user: User | null
      requestId: string;
    }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
