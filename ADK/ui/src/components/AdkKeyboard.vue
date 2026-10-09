<script setup lang="ts">
/**
 * Keyboard — Figma: Input › Input (45:3118), 8 variantes.
 * Type Alphabet / Number · Mayus · Characters (ñ, @, . , - _) · Two options (selector "123 / ABC").
 * Edita el v-model directamente (para usar con AdkTextField inputmode="none") y además emite cada tecla.
 * Agregados de a11y: cada tecla es un <button> con nombre; Mayúsculas con aria-pressed.
 */
import { computed, ref } from 'vue'
import { ArrowBigUp, Delete } from 'lucide-vue-next'

const value = defineModel<string>({ default: '' })
const props = withDefaults(
  defineProps<{ type?: 'alphabet' | 'number'; characters?: boolean; switchable?: boolean; maxLength?: number }>(),
  { type: 'alphabet', characters: false, switchable: false },
)
const emit = defineEmits<{ key: [key: string]; backspace: [] }>()

const mode = ref(props.type)
const shift = ref(false)
const ROWS = computed(() => {
  const r = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']]
  if (props.characters) r[2] = [...r[2], 'ñ']
  return r.map((row) => row.map((k) => (shift.value ? k.toUpperCase() : k)))
})
const LAST = computed(() => {
  const k = ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((c) => (shift.value ? c.toUpperCase() : c))
  return props.characters ? [...k, ',', '.', '@'] : k
})

function type(k: string) {
  if (props.maxLength && value.value.length >= props.maxLength) return
  value.value += k
  emit('key', k)
}
function back() {
  value.value = value.value.slice(0, -1)
  emit('backspace')
}
const KEY = 'adk-focus adk-press flex min-w-0 flex-1 items-center justify-center border border-p-secondary-grey bg-background-default active:bg-background-muted'
</script>

<template>
  <div role="group" aria-label="Teclado en pantalla" class="adk-ui flex w-[704px] flex-col gap-16 text-text-primary">
    <div v-if="switchable" class="flex flex-col items-center gap-8">
      <p class="adk-body-small-bold">Cambia el tipo de teclado</p>
      <div class="flex gap-8">
        <button
          v-for="m in (['number', 'alphabet'] as const)"
          :key="m"
          type="button"
          :aria-pressed="mode === m"
          class="adk-focus adk-body-small-bold h-48 w-[160px] rounded-xs border"
          :class="mode === m ? 'border-selected border-border-selected' : 'border-p-secondary-grey'"
          @click="mode = m"
        >{{ m === 'number' ? '123' : 'ABC' }}</button>
      </div>
    </div>

    <!-- Numérico: grilla 3 × 3 + 0, con borrar a la derecha -->
    <div v-if="mode === 'number'" class="mx-auto grid w-[352px] grid-cols-4">
      <button v-for="n in ['1', '2', '3']" :key="n" type="button" :class="KEY" class="adk-headline-medium h-[88px]" @click="type(n)">{{ n }}</button>
      <button type="button" :class="KEY" class="row-span-2 h-auto" aria-label="Borrar" @click="back"><Delete class="size-32" aria-hidden="true" /></button>
      <button v-for="n in ['4', '5', '6']" :key="n" type="button" :class="KEY" class="adk-headline-medium h-[88px]" @click="type(n)">{{ n }}</button>
      <button v-for="n in ['7', '8', '9', '0']" :key="n" type="button" :class="KEY" class="adk-headline-medium h-[88px]" @click="type(n)">{{ n }}</button>
    </div>

    <!-- Alfabético -->
    <div v-else class="flex flex-col">
      <div v-for="(row, i) in ROWS" :key="i" class="flex" :class="i === 2 && !characters ? 'px-32' : ''">
        <button v-for="k in row" :key="k" type="button" :class="KEY" class="adk-headline-extra-small h-56" @click="type(k)">{{ k }}</button>
      </div>
      <div class="flex" :class="characters ? '' : 'px-32'">
        <button type="button" :class="[KEY, 'h-56', shift ? '!bg-background-muted' : '']" aria-label="Mayúsculas" :aria-pressed="shift" @click="shift = !shift">
          <ArrowBigUp class="size-32" aria-hidden="true" />
        </button>
        <button v-for="k in LAST" :key="k" type="button" :class="KEY" class="adk-headline-extra-small h-56" @click="type(k)">{{ k }}</button>
        <button type="button" :class="KEY" class="h-56" aria-label="Borrar" @click="back"><Delete class="size-32" aria-hidden="true" /></button>
      </div>
      <div v-if="characters" class="flex">
        <button type="button" :class="KEY" class="adk-body-medium h-56" @click="type('_')">_</button>
        <button type="button" :class="KEY" class="adk-body-medium h-56 flex-[4]" @click="type(' ')">Espacio</button>
        <button type="button" :class="KEY" class="adk-body-medium h-56" @click="type('-')">-</button>
      </div>
    </div>

    <div v-if="mode === 'alphabet' && !characters" class="flex justify-center gap-16">
      <button type="button" class="adk-focus adk-press adk-body-small h-56 w-[200px] rounded-xs border border-p-secondary-grey" @click="type(' ')">Espacio</button>
      <button type="button" class="adk-focus adk-press adk-body-small h-56 w-[200px] rounded-xs border border-p-secondary-grey" @click="back">Borrar</button>
    </div>
  </div>
</template>
