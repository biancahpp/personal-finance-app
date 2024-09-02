import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://master--gleeful-torrone-9760d6.netlify.app',
  integrations: [tailwind(), icon()]
})
