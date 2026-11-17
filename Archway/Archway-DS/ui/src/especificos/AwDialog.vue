<script setup lang="ts">
/**
 * Dialog / Pop-up 💠 — Figma: Design Resources CORE › Dialog. 328 de ancho. El botón de cerrar (Icon Only
 * Secondary Small) va afuera, arriba a la derecha, separado 8 de la tarjeta. Tarjeta Surface/default radio L,
 * padding 16, gap 24; imagen Inset 296 × 296 radio L o Full bleed; título Heading Large Bold;
 * CTA Primary Medium a todo el ancho (+ Secondary opcional).
 * Usa <dialog> nativo (showModal): foco atrapado, Escape cierra, fondo inerte, foco vuelve al disparador.
 */
import { ref, watch, onMounted, useId } from 'vue'
import AwButton from '../components/AwButton.vue'
import AwIconButton from '../components/AwIconButton.vue'

const open = defineModel<boolean>('open', { default: false })
withDefaults(
  defineProps<{ title?: string; image?: string; imageAlt?: string; imageLayout?: 'inset' | 'full-bleed'; primaryLabel: string; secondaryLabel?: string; closable?: boolean }>(),
  { title: undefined, image: undefined, imageAlt: '', imageLayout: 'inset', secondaryLabel: undefined, closable: true },
)
const emit = defineEmits<{ primary: []; secondary: [] }>()
const el = ref<HTMLDialogElement>()
const id = useId()
const sync = () => { if (!el.value) return; if (open.value && !el.value.open) el.value.showModal(); else if (!open.value && el.value.open) el.value.close() }
onMounted(sync)
watch(open, sync)
</script>

<template>
  <dialog
    ref="el"
    :aria-labelledby="title ? id : undefined"
    class="aw-ui aw-toast w-[328px] max-w-[calc(100vw-32px)] overflow-visible bg-transparent p-0 backdrop:bg-[var(--aw-color-black-800-alpha)]"
    @close="open = false"
    @cancel="open = false"
  >
    <div class="flex flex-col gap-8">
      <div v-if="closable" class="flex justify-end">
        <AwIconButton icon="close" label="Cerrar" variant="secondary" size="small" @click="open = false" />
      </div>
      <div :class="['flex flex-col gap-24 overflow-hidden rounded-l bg-surface-default', imageLayout === 'inset' ? 'p-16' : 'pb-16']">
        <img v-if="image" :src="image" :alt="imageAlt" :class="['w-full object-cover', imageLayout === 'inset' ? 'aspect-square rounded-l' : 'aspect-[328/240]']" />
        <div class="flex flex-col gap-24" :class="imageLayout === 'full-bleed' ? 'px-16' : ''">
          <h2 v-if="title" :id="id" class="aw-heading-large-bold text-text-primary">{{ title }}</h2>
          <slot />
          <div class="flex flex-col gap-8">
            <AwButton :label="primaryLabel" size="medium" block @click="emit('primary')" />
            <AwButton v-if="secondaryLabel" :label="secondaryLabel" variant="secondary" size="medium" block @click="emit('secondary')" />
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>
