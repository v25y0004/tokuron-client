import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      config: 'wrangler.json',
      platformProxy: {
        configPath: 'wrangler.json',
          configPath: 'wrangler.json',
          environment: undefined,
          persist: false
      }
    })
  }
}
