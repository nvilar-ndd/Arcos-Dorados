<script setup lang="ts">
/**
 * Header 💠 (Selection Mode Header) — Figma: Design Resources CORE › Header. Surface/brand
 * (texto 8.63:1), radio XXL sólo abajo. Botón de modo (316 × 48) + QR (Icon Only 48).
 * State Generic · Pickup · Delivery · Mode Active · Skeleton. El estado del local va en texto,
 * no sólo en color.
 */
import AwIcon from '../components/AwIcon.vue'
import AwIconButton from '../components/AwIconButton.vue'

withDefaults(
  defineProps<{
    mode?: 'generic' | 'pickup' | 'delivery'
    action?: string
    location?: string
    storeStatus?: string
    storeStatusTone?: 'neutral' | 'error'
    skeleton?: boolean
  }>(),
  { mode: 'generic', action: '¿Cómo querés recibir tu pedido?', location: undefined, storeStatus: undefined, storeStatusTone: 'neutral', skeleton: false },
)
defineEmits<{ select: []; qr: [] }>()
</script>

<template>
  <header class="aw-ui flex w-full items-center gap-8 rounded-b-xxl bg-surface-brand px-16 pb-16 pt-8" :aria-busy="skeleton || undefined">
    <template v-if="skeleton">
      <span class="aw-shimmer h-48 flex-1 rounded-m bg-surface-muted" aria-hidden="true" />
      <span class="aw-shimmer size-48 rounded-full bg-surface-muted" aria-hidden="true" />
    </template>
    <template v-else>
      <button
        type="button"
        class="flex min-h-48 min-w-0 flex-1 items-center gap-8 rounded-m text-left text-text-primary outline-none focus-visible:outline-2 focus-visible:outline-border-strong"
        @click="$emit('select')"
      >
        <!-- Íconos Local / Moto de Iconography: pendientes de exportar (ver icons/README); slot para inyectarlos. -->
        <slot name="mode-icon"><AwIcon name="home" class="shrink-0" /></slot>
        <span class="flex min-w-0 flex-col">
          <span class="aw-label-medium">{{ action }}</span>
          <span v-if="location" class="aw-label-medium-bold truncate">{{ location }}</span>
          <span v-if="storeStatus" :class="['aw-label-small', storeStatusTone === 'error' ? 'text-feedback-error-text' : 'text-text-primary']">{{ storeStatus }}</span>
        </span>
        <AwIcon name="chevron-up" :rotate="180" :size="16" class="ml-auto shrink-0" />
      </button>
      <AwIconButton icon="qr" label="Mostrar mi código QR" variant="secondary" @click="$emit('qr')" />
    </template>
  </header>
</template>
