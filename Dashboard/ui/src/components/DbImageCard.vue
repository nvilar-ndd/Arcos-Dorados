<script setup lang="ts">
/**
 * Cards_img (3374:6726) — imagen cargada con nombre y acción de borrar. 192 × 264.
 * Estados: Enabled · hovered · pressed (borde `border/01` 2 px).
 */
import { Trash2 } from 'lucide-vue-next'

withDefaults(defineProps<{ src?: string; alt: string; label: string; removable?: boolean; selected?: boolean }>(), {
  removable: true,
  selected: false,
})
defineEmits<{ remove: [] }>()
</script>

<template>
  <figure
    :class="[
      'db-ui m-0 flex w-full max-w-[192px] flex-col gap-200 rounded-md bg-layer-01 p-200',
      selected ? 'border-2 border-border-01' : 'border border-border-02',
    ]"
  >
    <div class="relative aspect-square w-full overflow-hidden rounded-sm bg-layer-02">
      <img v-if="src" :src="src" :alt="alt" class="size-full object-cover" />
      <button
        v-if="removable"
        type="button"
        class="db-focus absolute right-50 top-50 inline-flex size-400 items-center justify-center rounded-full bg-layer-01 text-icon-primary"
        :aria-label="`Eliminar imagen ${label}`"
        @click="$emit('remove')"
      >
        <Trash2 class="size-200" aria-hidden="true" />
      </button>
    </div>
    <figcaption class="db-label02 text-center text-text-primary">{{ label }}</figcaption>
  </figure>
</template>
