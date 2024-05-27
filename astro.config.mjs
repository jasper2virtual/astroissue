import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

let styleCounter=0;

// https://astro.build/config
export default defineConfig({
  build: {
    format: "preserve",
    inlineStylesheets: "never"
  },
  vite: {
    build: {
      cssCodeSplit:false,
      rollupOptions: {
        output:{

          assetFileNames: function(file){
            if(file.name==='style.css'){
              return `style${styleCounter++}.css`
            }
            return '[name][extname]'
          },
          entryFileNames:'[name].js'

        }
      }
    }
  },
  integrations: [vue()]
});