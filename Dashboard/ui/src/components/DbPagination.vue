<script setup lang="ts">
/**
 * Pagination — Figma: Components › Pagination (787:27523) + Pagination-info / -cantidad / Dd-LabelNum.
 * "Ítems por página: [10 ⌄]   1–10 de 120  ‹ ›". Default horizontal; Small apilado (< 768 px o `size="small"`).
 */
import { computed, useId } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const page = defineModel<number>('page', { default: 1 })
const pageSize = defineModel<number>('pageSize', { default: 10 })

const props = withDefaults(
  defineProps<{
    total: number
    pageSizeOptions?: number[]
    size?: 'default' | 'small'
    ariaLabel?: string
  }>(),
  { pageSizeOptions: () => [5, 10, 20, 50, 100], size: 'default', ariaLabel: 'Paginación' },
)

const id = useId()
const pages = computed(() => Math.max(1, Math.ceil(props.total / pageSize.value)))
const from = computed(() => (props.total === 0 ? 0 : (page.value - 1) * pageSize.value + 1))
const to = computed(() => Math.min(props.total, page.value * pageSize.value))

function setSize(event: Event) {
  pageSize.value = Number((event.target as HTMLSelectElement).value)
  page.value = 1
}
</script>

<template>
  <nav
    :aria-label="ariaLabel"
    :class="['db-ui flex text-text-secondary', size === 'small' ? 'flex-col gap-50' : 'flex-col gap-50 md:flex-row md:items-center md:gap-300']"
  >
    <div class="flex items-center gap-[13px]">
      <label :for="`${id}-size`" class="db-label01">Ítems por página:</label>
      <!-- Dd-LabelNum: select nativo con el visual de Figma (56 × 24, `layer/02`). -->
      <span class="relative inline-flex h-300 items-center rounded-none bg-layer-02 hover:bg-button-secondary-hover">
        <select
          :id="`${id}-size`"
          :value="pageSize"
          class="db-focus db-label01 h-300 w-[56px] cursor-pointer appearance-none bg-transparent pl-100 pr-300 text-text-primary"
          @change="setSize"
        >
          <option v-for="n in pageSizeOptions" :key="n" :value="n">{{ n }}</option>
        </select>
        <svg viewBox="0 0 16 16" class="pointer-events-none absolute right-50 size-200 text-icon-primary" aria-hidden="true">
          <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>
    <div class="flex items-center gap-50">
      <span class="db-label01 text-text-primary" aria-live="polite">{{ from }}–{{ to }} de {{ total }}</span>
      <button
        type="button"
        class="db-focus inline-flex size-300 items-center justify-center rounded-sm text-icon-primary disabled:cursor-not-allowed disabled:text-text-disabled"
        :disabled="page <= 1"
        aria-label="Página anterior"
        @click="page = page - 1"
      >
        <ChevronLeft class="size-200" aria-hidden="true" />
      </button>
      <button
        type="button"
        class="db-focus inline-flex size-300 items-center justify-center rounded-sm text-icon-primary disabled:cursor-not-allowed disabled:text-text-disabled"
        :disabled="page >= pages"
        aria-label="Página siguiente"
        @click="page = page + 1"
      >
        <ChevronRight class="size-200" aria-hidden="true" />
      </button>
    </div>
  </nav>
</template>
