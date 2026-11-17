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
        'aw-hit flex h-[36px] items-center rounded-xxxl px-16 transition-[box-shadow] duration-fast ease-standard',
        disabled
          ? 'bg-surface-subtle text-text-disabled shadow-[inset_0_0_0_1px_var(--aw-border-subtle)]'
          : model
            ? 'bg-surface-default shadow-[inset_0_0_0_1px_var(--aw-border-input-active)] focus-within:shadow-[inset_0_0_0_1px_var(--aw-border-strong)]'
            : 'bg-surface-default shadow-[inset_0_0_0_1px_var(--aw-border-soft)] focus-within:shadow-[inset_0_0_0_1px_var(--aw-border-strong)]',
      ]"
    >
      <AwIcon name="search" :size="16" class="mr-[9px] text-icon-primary" />
      <input
        v-model="model"
        type="search"
        enterkeyhint="search"
        class="aw-label-medium min-w-0 flex-1 bg-transparent text-text-primary placeholder:text-text-secondary [&::-webkit-search-cancel-button]:hidden"
        :placeholder="placeholder"
        :aria-label="label"
        :disabled="disabled"
      />
      <button v-if="model && !disabled" type="button" class="aw-hit ml-4 mr-[5px] text-icon-primary" aria-label="Borrar búsqueda" @click="model = ''">
        <AwIcon name="cancel-filled" :size="16" />
      </button>
    </div>
  </form>
</template>
