import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      routes: {
          include: ['/*'],
      }
  })
  },
  preprocess: vitePreprocess(),
};

export default config;