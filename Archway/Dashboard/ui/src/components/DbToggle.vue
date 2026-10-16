<script setup lang="ts">
/**
 * Toggle (switch) — Figma: Components › Toggle (2022:4340).
 * Track 48 × 24, handle 18 × 18, área clicable 48 × 48. El halo (state layer) aparece en
 * hover (32 px) y pressed (40 px). En Figma Focused = Hovered: se suma el anillo `db-focus` (D-C06).
 * Para cambios que se aplican al instante; si requiere "Guardar", usar DbCheckbox.
 */
import { computed, useId } from 'vue'

const model = defineModel<boolean>({ default: false })

const props = withDefaults(
  defineProps<{
    /** Label visible ("Switch + Value"). Si no hay, usar `ariaLabel`. */
    label?: string
    description?: string
    ariaLabel?: string
    disabled?: boolean
    skeleton?: boolean
  }>(),
  { disabled: false, skeleton: false },
)

const id = useId()
const descId = `${id}-desc`

const trackClass = computed(() => {
  if (props.skeleton) return 'bg-button-skeleton rounded-sm'
  if (props.disabled) return model.value ? 'bg-button-primary-disabled rounded-full' : 'bg-button-secondary-focus rounded-full'
  return model.value ? 'bg-layer-07 rounded-full' : 'bg-layer-04 rounded-full'
})

const haloClass = computed(() =>
  model.value
    ? 'group-hover:bg-button-primary-hover-transparent group-focus-visible:bg-button-primary-hover-transparent group-active:bg-button-primary-pressed-transparent'
    : 'group-hover:bg-button-secondary-hover-transparent group-focus-visible:bg-button-secondary-hover-transparent group-active:bg-button-secondary-pressed-transparent',
)

function toggle() {
  if (!props.disabled && !props.skeleton) model.value = !model.value
}
</script>

<template>
  <div class="db-ui inline-flex items-center gap-200">
    <button
      :id="id"
      type="button"
      role="switch"
      :aria-checked="model"
      :aria-label="label ? undefined : ariaLabel"
      :aria-labelledby="label ? `${id}-label` : undefined"
      :aria-describedby="description ? descId : undefined"
      :disabled="disabled || skeleton"
      :aria-busy="skeleton || undefined"
      class="db-focus group relative inline-flex h-600 w-600 shrink-0 items-center justify-center rounded-full disabled:cursor-not-allowed"
      @click="toggle"
    >
      <span :class="['relative block h-300 w-600 transition-colors duration-fast', trackClass]">
        <span
          v-if="!skeleton"
          :class="[
            'absolute top-1/2 flex -translate-y-1/2 items-center justify-center transition-[left] duration-fast',
            model ? 'left-[27px]' : 'left-[3px]',
          ]"
        >
          <span
            v-if="!disabled"
            :class="[
              'absolute size-400 rounded-full transition-all duration-fast group-active:size-500',
              haloClass,
            ]"
            aria-hidden="true"
          />
          <span class="relative block size-[18px] rounded-full bg-background-01" aria-hidden="true" />
        </span>
      </span>
    </button>
    <span v-if="label || description" class="flex flex-col">
      <label v-if="label" :id="`${id}-label`" :for="id" :class="['db-label02', disabled ? 'text-text-disabled' : 'text-text-primary']">
        {{ label }}
      </label>
      <span v-if="description" :id="descId" class="db-label01 text-text-secondary">{{ description }}</span>
    </span>
  </div>
</template>
