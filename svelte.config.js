/*
 * Part of the AC-Portal project.
 * Copyright (c) 2026 Academic Center of PSHS-CVisC in Cebu
 * All rights reserved.
 */
 
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
    runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true),
    experimental: {
			async: true
		},
	},
	kit: {
    adapter: adapter(),
    csp: {
      mode: 'auto',
      directives: {
        'default-src': ['self'],
        'script-src': ['self', 'blob:', 'https://cdn.jsdelivr.net', 'https://vercel.live', 'https://va.vercel-scripts.com'],
        'script-src-elem': ['self', 'https://cdn.jsdelivr.net', 'https://va.vercel-scripts.com'],
        'style-src': ['self', 'unsafe-inline'],
        'img-src': ['self', 'data:', 'https:'],
        'connect-src': ['self', 'https://*.supabase.co'],
        'font-src': ['self', 'data:'],
        'frame-src': ['self', 'https://vercel.live'],
      },
      reportOnly: {
        'script-src': ['self', 'https://vercel.live'],
        'script-src-elem': ['self', 'https://va.vercel-scripts.com'],
        'img-src': ['self', 'data:', 'https:'],
      }
    },
		typescript: {
			config: (config) => ({
				...config,
				include: [...config.include, '../drizzle.config.ts']
			})
    },
    experimental: {
      remoteFunctions: true,
    }
	}
};

export default config;
