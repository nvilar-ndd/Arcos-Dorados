<script setup lang="ts">
/**
 * Modal — Figma: Components › Modal (750:24925). Style: Default · Mobile · Custom (slot).
 * Fondo `layer/02`, radio 8, padding 24 (16 lateral en mobile), gap 32.
 * Ancho por max-width de tokens `size/modal/*` = Tailwind/NuxtUI: xs 384 (max-w-sm) · sm 512 (max-w-lg)
 * · md 672 (max-w-2xl) · lg 896 (max-w-4xl) · full (max-w-none, mobile).
 * a11y: role=dialog/alertdialog, aria-modal, foco atrapado, Escape, foco de vuelta al disparador.
 */
import { computed, nextTick, onBeforeUnmount, ref, useId, watch } from 'vue'
import { X } from 'lucide-vue-next'
import DbButton from './DbButton.vue'

const open = defineModel<boolean>('open', { default: false })

const props = withDefaults(
  defineProps<{
    title: string
    description?: string
    optionalLabel?: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'
    primaryLabel?: string
    secondaryLabel?: string
    /** Acción destructiva: botón primario rojo + role="alertdialog". */
    danger?: boolean
    divider?: boolean
    /** Cuerpo con scroll interno (Show scroll). */
    scroll?: boolean
    closeOnBackdrop?: boolean
  }>(),
  { size: 'xs', secondaryLabel: 'Cancelar', danger: false, divider: false, scroll: false, closeOnBackdrop: true },
)

const emit = defineEmits<{ confirm: []; cancel: [] }>()

const id = useId()
const dialog = ref<HTMLElement | null>(null)
let returnTo: HTMLElement | null = null

const SIZE = { xs: 'max-w-modal-xs', sm: 'max-w-modal-sm', md: 'max-w-modal-md', lg: 'max-w-modal-lg', full: 'max-w-none h-full rounded-none' } as const
const width = computed(() => SIZE[props.size])

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'

function focusables(): HTMLElement[] {
  return Array.from(dialog.value?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') { event.stopPropagation(); cancel() }
  if (event.key !== 'Tab') return
  const items = focusables()
  if (!items.length) return
  const first = items[0] as HTMLElement
  const last = items[items.length - 1] as HTMLElement
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
}

function cancel() {
  emit('cancel')
  open.value = false
}
function confirm() {
  emit('confirm')
}

watch(open, async (value) => {
  if (value) {
    returnTo = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    await nextTick()
    // Primer elemento útil: el contenido o la acción principal, no la ✕.
    const items = focusables()
    ;(items.find((el) => !el.dataset.close) ?? items[0])?.focus()
  } else {
    document.body.style.overflow = ''
    returnTo?.focus()
  }
}, { immediate: false })

onBeforeUnmount(() => { document.body.style.overflow = '' })
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="db-ui fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--db-layer-06)_50%,transparent)] p-200"
      @click.self="closeOnBackdrop && cancel()"
    >
      <div
        ref="dialog"
        :role="danger ? 'alertdialog' : 'dialog'"
        aria-modal="true"
        :aria-labelledby="`${id}-title`"
        :aria-describedby="description ? `${id}-desc` : undefined"
        :class="[
          'flex max-h-full w-full flex-col gap-400 rounded-md bg-layer-02 px-200 py-300 md:px-300',
          width,
        ]"
        @keydown="onKeydown"
      >
        <header class="flex items-start gap-200">
          <div class="flex min-w-0 flex-1 flex-col gap-50">
            <p v-if="optionalLabel" class="db-label01 text-text-secondary">{{ optionalLabel }}</p>
            <h2 :id="`${id}-title`" class="db-h7 text-text-primary">{{ title }}</h2>
          </div>
          <button
            type="button"
            data-close="true"
            class="db-focus inline-flex size-300 shrink-0 items-center justify-center rounded-sm text-icon-primary"
            aria-label="Cerrar"
            @click="cancel"
          >
            <X class="size-200" aria-hidden="true" />
          </button>
        </header>

        <div :class="['flex flex-col gap-200', scroll && 'db-focus -mx-100 overflow-y-auto px-100']" :tabindex="scroll ? 0 : undefined">
          <p v-if="description" :id="`${id}-desc`" class="db-label02 text-text-secondary">{{ description }}</p>
          <slot />
        </div>

        <hr v-if="divider" class="m-0 h-px border-0 bg-border-02" />

        <footer v-if="primaryLabel || $slots.footer" class="flex flex-wrap justify-end gap-200">
          <slot name="footer">
            <DbButton variant="secondary" @click="cancel">{{ secondaryLabel }}</DbButton>
            <DbButton :variant="danger ? 'danger' : 'primary'" @click="confirm">{{ primaryLabel }}</DbButton>
          </slot>
        </footer>
      </div>
    </div>
  </Teleport>
</template>
