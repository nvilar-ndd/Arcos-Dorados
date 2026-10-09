/** Piezas compartidas por las stories de pantallas (no son parte de la librería). */
import { ref } from 'vue'
import { Accessibility } from 'lucide-vue-next'
import {
  AdkBanner, AdkButton, AdkCartBar, AdkCategoryCard, AdkCategoryNavButton, AdkFooter, AdkHeader, AdkKioskShell, AdkLogo,
  AdkNavMenu, AdkPointsHint, AdkProductCard, AdkQuantity, AdkSnackbarHost, AdkUserFooter, useSnackbar,
} from '../src'
import KioskFrame from './KioskFrame.vue'
import { categories, placeholder, products, sections } from './fixtures'

export const shellComponents = {
  AdkBanner, AdkButton, AdkCartBar, AdkCategoryCard, AdkCategoryNavButton, AdkFooter, AdkHeader, AdkKioskShell, AdkLogo,
  AdkNavMenu, AdkPointsHint, AdkProductCard, AdkQuantity, AdkSnackbarHost, AdkUserFooter, KioskFrame,
}

export function shellSetup() {
  const { show } = useSnackbar()
  const cart = ref<string[]>([])
  return {
    Accessibility, categories, products, sections, show, cart,
    section: ref('home'), cat: ref('Hamburguesas'), img: placeholder(), catImg: placeholder('', 64, 64), bannerImg: placeholder('', 152, 152),
    add(name: string) {
      cart.value = [...cart.value, name]
      show(`${name} agregado al pedido`)
    },
  }
}

export const logoSlot = `<template #logo><AdkLogo><span class="adk-body-small flex size-full items-center justify-center rounded-s border border-dashed border-border-default text-text-secondary">Logo</span></AdkLogo></template>`

/** Home con pedido: header + nav (menú + categorías) + módulos + footer flotante. */
export const homeTemplate = (accessible = false) => `<KioskFrame :scale="${accessible ? 0.42 : 0.42}">
  <AdkKioskShell ${accessible ? 'accessible' : ''}>
    <template #header><AdkHeader title="Hamburguesas">${logoSlot}</AdkHeader></template>
    <template #nav>
      <div class="flex flex-col gap-24">
        <AdkNavMenu v-model:current="section" :items="sections" user-name="Ronald" points="300 pts." ${accessible ? 'compact' : ''} />
        <nav aria-label="Categorías"><ul class="flex flex-col gap-8">
          <li v-for="c in categories" :key="c"><AdkCategoryNavButton :label="c" :image="catImg" :selected="c === cat" @click="cat = c" /></li>
        </ul></nav>
      </div>
    </template>
    <AdkBanner title="¡Llegó" highlight="MiMcDonald's!" subtitle="El programa de beneficios" cta="Quiero registrarme" :image="bannerImg" />
    <section aria-label="Productos" class="grid grid-cols-3 gap-16">
      <AdkProductCard v-for="p in products" :key="p.name" v-bind="p" :image="img" @select="add(p.name)" />
    </section>
    <template #snackbar><AdkSnackbarHost /></template>
    <template #footer>
      <AdkFooter>
        <template #user><AdkUserFooter variant="logged" user-name="Ronald" /></template>
        <AdkPointsHint points="103" compact />
        <AdkCartBar :count="cart.length" :total="'$ ' + (cart.length * 4950).toLocaleString('es-AR')" :disabled="!cart.length" />
        <div class="flex gap-16">
          <AdkButton variant="secondary" size="md" class="flex-1" @click="cart = []">Cancelar pedido</AdkButton>
          <AdkButton variant="secondary" size="md" class="flex-1" :icon="Accessibility">Accesibilidad</AdkButton>
        </div>
      </AdkFooter>
    </template>
  </AdkKioskShell>
</KioskFrame>`
