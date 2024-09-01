import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://biancahpp.github.io',
  integrations: [tailwind(), icon()],
  base: '/personal-finance-app',
  build: {
    assets: '_astro'
  }
})
