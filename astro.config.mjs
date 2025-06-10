// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://bllfrnch.github.io',
	base: process.env.NODE_ENV === 'production' ? '/ai-exp' : '/', // Only use base path in production
	output: 'static',
	outDir: './dist',
	integrations: [mdx(), sitemap()],
});
