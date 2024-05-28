import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";


// https://astro.build/config
export default defineConfig({

  build: {
    assets:'hello-assets',
    format: "preserve",
    inlineStylesheets: "never"
  },
  integrations: [vue()]
});