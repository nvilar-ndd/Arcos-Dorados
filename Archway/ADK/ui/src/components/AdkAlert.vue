<script setup lang="ts">
/**
 * Alerta — Figma: Alerta (2326:2388). Pantalla completa blanca, bloque de 864.
 * Ícono 144 · título 60 Bold · mensaje 40 · botones de 380 × 80 (secundario + primario), gap 96 / 56 / 32.
 * Agregados de a11y: role="alertdialog", foco inicial en la acción principal, foco atrapado, no se cierra solo.
 */
import { nextTick, ref, useId, watch } from 'vue'
import { OctagonAlert } from 'lucide-vue-next'
import AdkButton from './AdkButton.vue'

const open = defineModel<boolean>('open', { default: false })
withDefaults(defineProps<{ title: string; message: string; primaryLabel?: string; secondaryLabel?: string }>(), {
  primaryLabel: 'Continuar',
})
const emit = defineEmits<{ primary: []; secondary: [] }>()
const id = useId()
const box = ref<HTMLElement | null>(null)

watch(open, (o) => o && nextTick(() => box.value?.querySelector<HTMLButtonElement>('[data-primary]')?.focus()), { immediate: true })

function trap(e: KeyboardEvent) {
  const els = box.value?.querySelectorAll<HTMLElement>('button')
  if (!els?.length) return
  const first = els[0]
  const last = els[els.length - 1]
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
}
function act(kind: 'primary' | 'secondary') {
  if (kind === 'primary') emit('primary')
  else emit('secondary')
  open.value = false
}
</script>

<template>
  <div v-if="open" class="adk-ui fixed inset-0 z-50 flex items-center justify-center bg-background-default text-text-primary">
    <div
      ref="box"
      role="alertdialog"
      aria-modal="true"
      :aria-labelledby="`${id}-t`"
      :aria-describedby="`${id}-m`"
      class="flex w-[864px] max-w-full flex-col items-center gap-96 px-24 text-center"
      @keydown.tab="trap"
    >
      <div class="flex flex-col items-center gap-56">
        <OctagonAlert class="size-[144px]" :stroke-width="1.25" aria-hidden="true" />
        <div class="flex flex-col gap-32">
          <h2 :id="`${id}-t`" class="adk-headline-extra-large-bold">{{ title }}</h2>
          <p :id="`${id}-m`" class="adk-headline-medium">{{ message }}</p>
        </div>
      </div>
      <div class="flex w-full max-w-[784px] gap-24">
        <AdkButton v-if="secondaryLabel" variant="secondary" class="flex-1" @click="act('secondary')">{{ secondaryLabel }}</AdkButton>
        <AdkButton data-primary class="flex-1" @click="act('primary')">{{ primaryLabel }}</AdkButton>
      </div>
    </div>
  </div>
</template>
