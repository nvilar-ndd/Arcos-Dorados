<script setup lang="ts">
/**
 * Fila de dato para DbCard: subtítulo (`text/secondary`) + valor o tag a la derecha,
 * o apilado (subtítulo arriba, valor destacado abajo).
 */
import DbTag, { type DbTagTone } from './DbTag.vue'

withDefaults(
  defineProps<{
    label: string
    value?: string
    tag?: { label: string; tone?: DbTagTone }
    layout?: 'inline' | 'stack'
  }>(),
  { layout: 'inline' },
)
</script>

<template>
  <div :class="['db-ui flex gap-100', layout === 'inline' ? 'items-center justify-between' : 'flex-col gap-50']">
    <span class="db-label01 text-text-secondary">{{ label }}</span>
    <span v-if="value || tag || $slots.default" class="db-label01 text-text-primary">
      <slot>
        <DbTag v-if="tag" :label="tag.label" :tone="tag.tone ?? 'neutral'" />
        <template v-else>{{ value }}</template>
      </slot>
    </span>
  </div>
</template>
