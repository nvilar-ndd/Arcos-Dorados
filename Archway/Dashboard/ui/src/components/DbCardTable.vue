<script setup lang="ts">
/**
 * Tabla compacta dentro de DbCard (Style = Card_Table / "Row 3 col").
 * Encabezados `text/primary`, celdas `text/secondary`, `Label01`.
 */
defineProps<{ columns: string[]; rows: string[][]; caption?: string }>()
</script>

<template>
  <table class="db-ui w-full table-fixed">
    <caption v-if="caption" class="db-sr-only">{{ caption }}</caption>
    <thead>
      <tr>
        <th v-for="c in columns" :key="c" scope="col" class="db-label01 py-50 text-left font-normal text-text-primary">{{ c }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, r) in rows" :key="r">
        <td v-for="(cell, c) in row" :key="c" class="db-label01 py-50 text-text-secondary">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>
