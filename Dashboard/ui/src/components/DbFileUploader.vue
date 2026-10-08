<script setup lang="ts">
/**
 * File uploader — Figma: Components › File uploader
 *   File Uploader (3300:5800) · _FileUploader (zona, 3273:23940) · file item (3296:6132) · file list (6474:10306).
 * Zona con borde punteado: Enabled `border/02` · Hover `link/primary` · Focus `border/01` · Error · disabled.
 * El componente no sube archivos: emite `select` y muestra lo que llegue en `files`.
 * Docs: Dashboard/components/file-uploader.md
 */
import { ref, useId } from 'vue'
import { Upload, X } from 'lucide-vue-next'
import DbProgressCircle from './DbProgressCircle.vue'
import DbStatusIcon from './DbStatusIcon.vue'

export interface DbUploadedFile {
  id: string
  name: string
  status: 'uploaded' | 'loading' | 'error'
  /** 0–100 mientras `status = loading`. */
  progress?: number
  /** URL de vista previa para `layout = grid`. */
  previewUrl?: string
  errorText?: string
}

const props = withDefaults(
  defineProps<{
    label?: string
    /** Detalle del archivo a subir, p. ej. "imagen jpg o png · Máx 2 MB". */
    supportingText?: string
    accept?: string
    multiple?: boolean
    files?: DbUploadedFile[]
    layout?: 'list' | 'grid'
    status?: 'default' | 'error'
    errorText?: string
    disabled?: boolean
  }>(),
  { multiple: false, files: () => [], layout: 'list', status: 'default', disabled: false },
)

const emit = defineEmits<{ select: [files: File[]]; remove: [id: string] }>()

const id = useId()
const input = ref<HTMLInputElement | null>(null)
const dragging = ref(false)

function pick() {
  if (!props.disabled) input.value?.click()
}
function onChange(event: Event) {
  const list = (event.target as HTMLInputElement).files
  if (list?.length) emit('select', Array.from(list))
  ;(event.target as HTMLInputElement).value = ''
}
function onDrop(event: DragEvent) {
  dragging.value = false
  if (props.disabled) return
  const list = event.dataTransfer?.files
  if (list?.length) emit('select', Array.from(props.multiple ? list : [list[0] as File]))
}
</script>

<template>
  <div class="db-ui flex w-full max-w-[328px] flex-col gap-100">
    <span v-if="label" :id="`${id}-label`" class="db-label02 p-100 text-text-primary">{{ label }}</span>

    <div
      role="button"
      :tabindex="disabled ? -1 : 0"
      :aria-labelledby="label ? `${id}-label ${id}-cta` : `${id}-cta`"
      :aria-describedby="[supportingText ? `${id}-help` : '', status === 'error' && errorText ? `${id}-error` : ''].filter(Boolean).join(' ') || undefined"
      :aria-disabled="disabled || undefined"
      :class="[
        'db-focus group flex min-h-1200 flex-col items-center justify-center gap-50 rounded-sm border border-dashed bg-layer-02 p-200 text-center transition-colors duration-fast',
        disabled
          ? 'cursor-not-allowed border-border-03'
          : status === 'error'
            ? 'cursor-pointer border-support-error'
            : dragging
              ? 'cursor-pointer border-link-primary'
              : 'cursor-pointer border-border-02 hover:border-link-primary focus-visible:border-border-01',
      ]"
      @click="pick"
      @keydown.enter.prevent="pick"
      @keydown.space.prevent="pick"
      @dragover.prevent="dragging = !disabled"
      @dragleave="dragging = false"
      @drop.prevent="onDrop"
    >
      <Upload :class="['size-300', disabled ? 'text-text-disabled' : 'text-icon-primary']" :stroke-width="1.5" aria-hidden="true" />
      <span :class="['db-label02', disabled ? 'text-text-disabled' : 'text-text-secondary']">Arrastra una imagen hasta aquí o</span>
      <span :id="`${id}-cta`" :class="['db-label02', disabled ? 'text-text-disabled' : 'text-link-primary']">sube un archivo</span>

    </div>

    <input
      ref="input"
      type="file"
      class="db-sr-only"
      tabindex="-1"
      aria-hidden="true"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      @change="onChange"
      />
    <p v-if="supportingText" :id="`${id}-help`" class="db-label01 text-text-secondary">{{ supportingText }}</p>
    <p v-if="status === 'error' && errorText" :id="`${id}-error`" class="db-label01 text-text-error">{{ errorText }}</p>

    <ul
      v-if="files.length"
      :class="layout === 'grid' ? 'grid grid-cols-1 gap-100' : 'flex flex-wrap gap-100'"
      aria-label="Archivos"
      aria-live="polite"
    >
      <li v-for="file in files" :key="file.id" class="flex flex-col">
        <div
          :class="[
            'flex items-center gap-100 rounded-sm border bg-layer-02',
            layout === 'grid' ? 'flex-col items-stretch p-0' : 'h-400 px-200',
            file.status === 'error' ? 'border-support-error' : 'border-transparent',
            layout === 'list' && files.length > 1 ? '' : 'w-full',
          ]"
        >
          <div v-if="layout === 'grid'" class="relative aspect-[25/22] w-full overflow-hidden rounded-sm bg-layer-02">
            <img v-if="file.previewUrl && file.status === 'uploaded'" :src="file.previewUrl" :alt="file.name" class="size-full object-cover" />
            <span v-else-if="file.status === 'loading'" class="absolute inset-0 flex items-center justify-center">
              <DbProgressCircle :value="file.progress ?? 0" :label="`Subiendo ${file.name}`" />
            </span>
            <button
              type="button"
              class="db-focus absolute right-100 top-100 inline-flex size-300 items-center justify-center rounded-full bg-layer-06 text-icon-tertiary"
              :aria-label="`Quitar ${file.name}`"
              @click="emit('remove', file.id)"
            >
              <X class="size-200" aria-hidden="true" />
            </button>
          </div>
          <div :class="['flex min-w-0 items-center gap-100', layout === 'grid' ? 'h-400 px-200' : 'flex-1']">
            <span class="db-label02 min-w-0 flex-1 truncate text-text-primary">{{ file.name }}</span>
            <DbProgressCircle v-if="file.status === 'loading' && layout === 'list'" :value="file.progress ?? 0" :label="`Subiendo ${file.name}`" />
            <DbStatusIcon v-if="file.status === 'error'" status="error" :size="16" />
            <button
              v-if="layout === 'list'"
              type="button"
              class="db-focus inline-flex size-300 items-center justify-center rounded-sm text-icon-primary"
              :aria-label="`Quitar ${file.name}`"
              @click="emit('remove', file.id)"
            >
              <X class="size-200" aria-hidden="true" />
            </button>
          </div>
        </div>
        <p v-if="file.status === 'error' && file.errorText" class="db-label01 pt-50 text-text-error">{{ file.errorText }}</p>
      </li>
    </ul>
  </div>
</template>
