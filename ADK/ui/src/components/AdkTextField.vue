<script setup lang="ts">
/**
 * ADK Text Field — Figma: Input › ADK Text Field (2521:1337). 888 × 104 + texto de ayuda (total 136).
 * Campo con línea inferior, ícono a la izquierda y label que sube al enfocar o tener valor.
 * Estados de Figma: Inactive · Focused · Typing · Activated · Error.
 * Agregados de a11y (sin cambiar el reposo): la línea pasa a Black 2 px con foco (A-C05) y el error suma ícono (A-A04).
 * La línea #ADADAD (2.24:1) queda como en Figma hasta que se apruebe A-A02.
 */
import { computed, ref, useId, type Component } from 'vue'
import { OctagonAlert } from 'lucide-vue-next'

const value = defineModel<string>({ default: '' })
const props = withDefaults(
  defineProps<{
    label: string
    helper?: string
    error?: string
    placeholder?: string
    icon?: Component
    type?: 'text' | 'email' | 'tel'
    /** `none` cuando se usa el teclado en pantalla (AdkKeyboard): evita que aparezca el del sistema. */
    inputmode?: 'none' | 'text' | 'numeric' | 'email' | 'tel'
    autocomplete?: string
    disabled?: boolean
  }>(),
  { type: 'text', inputmode: 'text', disabled: false },
)
const id = useId()
const focused = ref(false)
const floated = computed(() => focused.value || value.value.length > 0)
const describedBy = computed(() => (props.error || props.helper ? `${id}-msg` : undefined))
defineExpose({ focus: () => document.getElementById(id)?.focus() })
</script>

<template>
  <div class="adk-ui flex w-full max-w-[888px] flex-col gap-8 text-text-primary" :class="disabled ? 'opacity-40' : ''">
    <div
      class="relative flex h-[104px] items-end gap-24 bg-background-default px-16 pb-16 transition-colors duration-fast"
      :class="[
        error ? 'border-b border-border-error' : 'border-b border-p-secondary-grey',
        focused ? 'border-b-focus !border-border-strong' : '',
        error && focused ? '!border-border-error' : '',
      ]"
    >
      <component :is="icon" v-if="icon" class="mb-4 size-32 shrink-0" aria-hidden="true" />
      <div class="relative flex min-w-0 flex-1 flex-col justify-end">
        <label
          :for="id"
          class="transition-all duration-fast"
          :class="[floated ? 'adk-body-small mb-8' : 'adk-body-medium absolute bottom-0', error ? 'text-text-error' : floated ? 'text-text-secondary' : 'text-text-primary']"
        >{{ label }}</label>
        <input
          :id="id"
          v-model="value"
          :type="type"
          :inputmode="inputmode"
          :autocomplete="autocomplete"
          :placeholder="floated ? placeholder : undefined"
          :disabled="disabled"
          :aria-invalid="error ? true : undefined"
          :aria-describedby="describedBy"
          class="adk-body-medium w-full bg-transparent outline-none placeholder:text-text-disabled"
          :class="[floated ? '' : 'opacity-0', error ? 'caret-[var(--adk-text-error)]' : 'caret-[var(--adk-text-primary)]']"
          @focus="focused = true"
          @blur="focused = false"
        />
      </div>
    </div>
    <p v-if="error || helper" :id="`${id}-msg`" class="adk-body-medium flex items-center gap-8 px-16" :class="error ? 'text-text-error' : 'text-text-secondary'">
      <OctagonAlert v-if="error" class="size-24 shrink-0" aria-hidden="true" />{{ error || helper }}
    </p>
  </div>
</template>
