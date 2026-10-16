<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ value: string }>()
const copied = ref(false)

async function copy(): Promise<void> {
  try {
    await navigator.clipboard.writeText(props.value)
    copied.value = true
    window.setTimeout(() => (copied.value = false), 1200)
  } catch {
    // Sin permiso de portapapeles (iframe sandbox): el valor sigue visible para copiar a mano.
  }
}
</script>

<template>
  <button class="copy" type="button" :aria-label="`Copiar ${value}`" @click="copy">
    <code>{{ copied ? 'Copiado ✓' : value }}</code>
  </button>
</template>
