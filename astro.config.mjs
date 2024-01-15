import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  devOptions: {
    port: 3000,
    hostname: '',
    site: 'https://manuel-lopez17.github.io/',
    base: 'manuel-lopez17.github.io'
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    })
  ]
})
