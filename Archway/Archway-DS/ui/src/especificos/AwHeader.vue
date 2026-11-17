<script setup lang="ts">
/**
 * Header 💠 (Selection Mode Header) — Figma: Design Resources CORE › Header (2236:2206).
 * Surface/brand, radio 32 sólo abajo, padding 16 a los costados y abajo; arriba 88 (Expanded) o 56
 * (Collapsed), que en Figma incluye la zona del status bar. Modo Default · PickUp · Delivery.
 * Expanded: ícono de modo 16 + acción (Label Medium) y debajo el destino (Label Medium Bold) con el
 * Dropdown (chevron 16 sobre círculo Surface/muted). Collapsed: todo en una línea, el destino se trunca.
 * QR: Icon Only Medium sobre Button/secondary-bg (blanco).
 */
import AwIcon from '../components/AwIcon.vue'
import AwIconButton from '../components/AwIconButton.vue'

const props = withDefaults(
  defineProps<{
    mode?: 'generic' | 'pickup' | 'delivery'
    state?: 'expanded' | 'collapsed'
    /** "Retirar en", "Enviar a", "Retirar o enviar". */
    action?: string
    /** Local, "Alias · Calle y número" o la invitación a elegir. */
    location?: string
    qr?: boolean
    skeleton?: boolean
  }>(),
  { mode: 'generic', state: 'expanded', action: undefined, location: undefined, qr: true, skeleton: false },
)
defineEmits<{ select: []; qr: [] }>()
const ICON = { generic: 'eat-in', pickup: 'counter', delivery: 'delivery' } as const
const ACTION = { generic: 'Retirar o enviar', pickup: 'Retirar en', delivery: 'Enviar a' } as const
const LOCATION = { generic: 'Elegí cómo querés tu pedido', pickup: 'Elegí un local', delivery: 'Elegí una dirección' } as const
const text = () => props.action ?? ACTION[props.mode]
const where = () => props.location ?? LOCATION[props.mode]
</script>

<template>
  <header
    :class="['aw-ui flex w-full items-center gap-16 rounded-b-xxl bg-surface-brand px-16 pb-16', state === 'expanded' ? 'pt-[88px]' : 'pt-56']"
    :aria-busy="skeleton || undefined"
  >
    <template v-if="skeleton">
      <span class="aw-shimmer h-48 flex-1 rounded-m bg-surface-muted" aria-hidden="true" />
      <span class="aw-shimmer size-48 rounded-full bg-surface-muted" aria-hidden="true" />
    </template>
    <template v-else>
      <button
        type="button"
        :class="[
          'flex min-w-0 flex-1 text-left text-text-primary outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-strong',
          state === 'expanded' ? 'h-48 flex-col justify-center' : 'h-24 items-center gap-4',
        ]"
        @click="$emit('select')"
      >
        <span class="flex shrink-0 items-center gap-4">
          <AwIcon v-if="state === 'expanded'" :name="ICON[mode]" :size="16" />
          <span class="aw-label-medium whitespace-nowrap">{{ text() }}</span>
        </span>
        <span class="flex h-24 min-w-0 items-center gap-8">
          <span class="aw-label-medium-bold truncate">{{ where() }}</span>
          <span class="flex size-16 shrink-0 items-center justify-center rounded-full bg-surface-muted" aria-hidden="true">
            <svg viewBox="0 0 16 16" class="size-16 fill-icon-primary"><path d="M10.28 6.31a1 1 0 0 1 1.44 1.38l-2.87 3a1 1 0 0 1-1.41.03l-3.13-3a1 1 0 0 1 1.38-1.44l2.41 2.31 2.18-2.28Z" /></svg>
          </span>
        </span>
      </button>
      <AwIconButton v-if="qr" icon="qr" label="Mostrar mi código QR" variant="secondary" :stroke="false" @click="$emit('qr')" />
    </template>
  </header>
</template>
