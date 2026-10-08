import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // La librería vive en ../ui (fuera de este paquete): sus imports se resuelven desde acá.
  resolve: { dedupe: ['vue', 'lucide-vue-next'] },
})
