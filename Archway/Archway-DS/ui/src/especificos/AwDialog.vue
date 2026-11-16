<script setup lang="ts">
/**
 * Dialog / Pop-up 💠 — Figma: Design Resources CORE › Dialog. 328 de ancho, Surface/default, radio L.
 * Imagen Inset o Full bleed · título Heading Large Bold · CTA Primary + Secondary opcional · cerrar.
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
    class="aw-ui aw-toast w-[328px] max-w-[calc(100vw-32px)] overflow-hidden rounded-l bg-surface-default p-0 shadow-deep-h-elev-3 backdrop:bg-[var(--aw-color-black-800-alpha)]"
    @close="open = false"
    @cancel="open = false"
  >
    <div class="relative flex flex-col gap-16" :class="imageLayout === 'inset' ? 'p-16' : 'pb-16'">
      <AwIconButton v-if="closable" icon="close" label="Cerrar" variant="secondary" size="small" class="absolute right-16 top-16 z-[1]" @click="open = false" />
      <img v-if="image" :src="image" :alt="imageAlt" :class="['w-full object-cover', imageLayout === 'inset' ? 'aspect-square rounded-m' : 'aspect-[328/240]']" />
      <div class="flex flex-col gap-16" :class="imageLayout === 'full-bleed' ? 'px-16' : ''">
        <h2 v-if="title" :id="id" class="aw-heading-large-bold text-text-primary">{{ title }}</h2>
        <slot />
        <AwButton :label="primaryLabel" block @click="emit('primary')" />
        <AwButton v-if="secondaryLabel" :label="secondaryLabel" variant="secondary" block @click="emit('secondary')" />
      </div>
    </div>
  </dialog>
</template>
