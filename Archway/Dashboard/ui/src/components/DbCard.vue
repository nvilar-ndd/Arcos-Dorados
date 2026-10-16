<script setup lang="ts">
/**
 * Card — Figma: Components › Card (2857:32116). Style:
 *  - base        → Informar: ícono + eyebrow + título (156 px mín.)
 *  - info        → Resumen corto a la derecha del contenido (max 208 px, hasta 3–4 subtítulos)
 *  - description → Resumen de cada paso en la revisión final; título e ícono llevan al detalle
 *  - table       → Filas de 3 columnas (+ tag)
 * Fondo `layer/01`, borde `border/02`, radio 4, padding/gap 8. No es interactiva (salvo el link al detalle).
 * Contenido con DbCardField / DbCardTable / DbDivider.
 */
import type { Component } from 'vue'
import { ExternalLink } from 'lucide-vue-next'
import DbDivider from './DbDivider.vue'

withDefaults(
  defineProps<{
    variant?: 'base' | 'info' | 'description' | 'table'
    title: string
    eyebrow?: string
    icon?: Component
    /** `description`: destino del detalle (título + ícono). */
    detailHref?: string
    headingLevel?: 2 | 3 | 4
  }>(),
  { variant: 'base', headingLevel: 3 },
)
</script>

<template>
  <article
    :class="[
      'db-ui flex gap-100 rounded-sm border border-border-02 bg-layer-01 p-100',
      variant === 'base' ? 'min-w-[156px] flex-row items-start' : 'flex-col',
      variant === 'info' && 'w-[208px] max-w-full',
      (variant === 'description' || variant === 'table') && 'w-[240px] max-w-full',
    ]"
  >
    <template v-if="variant === 'base'">
      <component :is="icon" v-if="icon" class="size-200 shrink-0 text-text-success" aria-hidden="true" />
      <div class="flex min-w-0 flex-col">
        <p v-if="eyebrow" class="db-label01 text-text-secondary">{{ eyebrow }}</p>
        <component :is="`h${headingLevel}`" class="db-label03 text-text-primary">{{ title }}</component>
        <slot />
      </div>
    </template>

    <template v-else>
      <header class="flex items-center gap-100">
        <component
          :is="icon"
          v-if="icon"
          :class="[variant === 'description' ? 'size-300 text-icon-primary' : 'size-200 text-text-success', 'shrink-0']"
          aria-hidden="true"
        />
        <component :is="`h${headingLevel}`" class="db-label03 min-w-0 flex-1 text-text-primary">
          <a v-if="detailHref" :href="detailHref" class="db-focus rounded-sm text-text-primary no-underline hover:underline">{{ title }}</a>
          <template v-else>{{ title }}</template>
        </component>
        <a
          v-if="detailHref"
          :href="detailHref"
          class="db-focus inline-flex size-300 items-center justify-center rounded-sm text-icon-primary"
          :aria-label="`Ver detalle de ${title}`"
        >
          <ExternalLink class="size-200" aria-hidden="true" />
        </a>
      </header>
      <DbDivider v-if="variant !== 'info'" />
      <div class="flex flex-col gap-100">
        <slot />
      </div>
    </template>
  </article>
</template>
