<script setup lang="ts">
/**
 * Search — Figma: Design Resources CORE › Search / Android (3642:347).
 * Píldora de 36 (área táctil 48), lupa a la izquierda y borrar a la derecha.
 * En iOS es el buscador nativo (ver ios/). Rol searchbox; anunciar resultados lo hace la pantalla.
 */
import AwIcon from './AwIcon.vue'

const model = defineModel<string>({ default: '' })
withDefaults(defineProps<{ placeholder?: string; label?: string; disabled?: boolean }>(), {
  placeholder: 'Buscar', label: 'Buscar productos', disabled: false,
})
defineEmits<{ submit: [query: string] }>()
</script>

<template>
  <form role="search" class="aw-ui w-full" @submit.prevent="$emit('submit', model)">
    <div
      :class="[
        'aw-hit flex h-[36px] items-center gap-8 rounded-xxxl border px-16 transition-colors duration-fast ease-standard',
        disabled ? 'bg-surface-subtle border-border-subtle text-text-disabled' : model ? 'bg-surface-default border-border-input-active focus-within:border-border-strong' : 'bg-surface-default border-border-soft focus-within:border-border-strong',
      ]"
    >
      <AwIcon name="search" :size="16" class="text-icon-primary" />
      <input
        v-model="model"
        type="search"
        enterkeyhint="search"
        class="aw-label-medium min-w-0 flex-1 bg-transparent text-text-primary placeholder:text-text-secondary [&::-webkit-search-cancel-button]:hidden"
        :placeholder="placeholder"
        :aria-label="label"
        :disabled="disabled"
      />
      <button v-if="model && !disabled" type="button" class="text-icon-primary" aria-label="Borrar búsqueda" @click="model = ''">
        <AwIcon name="cancel" :size="16" />
      </button>
    </div>
  </form>
</template>
