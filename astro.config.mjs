// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://bllfrnch.github.io',
	base: '/ai-exp', // Required for GitHub Pages project sites
	output: 'static',
	outDir: './dist',
	integrations: [mdx(), sitemap()],
});
