import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DbFileUploader, type DbUploadedFile } from '../src'
import { placeholder } from './fixtures'

const meta = {
  title: 'Componentes/File uploader',
  component: DbFileUploader,
  parameters: { controls: { disable: false } },
  argTypes: { layout: { control: 'inline-radio', options: ['list', 'grid'] }, status: { control: 'inline-radio', options: ['default', 'error'] } },
  args: { label: 'Image', supportingText: 'imagen jpg o png - Max 2mb', accept: 'image/png,image/jpeg', multiple: true, layout: 'list', status: 'default', disabled: false },
} satisfies Meta<typeof DbFileUploader>
export default meta
type Story = StoryObj<typeof meta>

/** Elegí o arrastrá archivos: se simula la subida con progreso. */
export const Playground: Story = {
  render: (args) => ({
    components: { DbFileUploader },
    setup: () => {
      const files = ref<DbUploadedFile[]>([])
      function onSelect(list: File[]) {
        for (const f of list) {
          const id = `${f.name}-${Date.now()}`
          const tooBig = f.size > 2 * 1024 * 1024
          files.value.push({ id, name: f.name, status: 'loading', progress: 10, previewUrl: URL.createObjectURL(f) })
          const timer = setInterval(() => {
            const item = files.value.find((x) => x.id === id)
            if (!item) return clearInterval(timer)
            item.progress = (item.progress ?? 0) + 30
            if ((item.progress ?? 0) >= 100) {
              clearInterval(timer)
              item.status = tooBig ? 'error' : 'uploaded'
              if (tooBig) item.errorText = 'El archivo supera los 2 MB'
            }
          }, 400)
        }
      }
      return { args, files, onSelect, remove: (id: string) => (files.value = files.value.filter((f) => f.id !== id)) }
    },
    template: '<div class="p-300"><DbFileUploader v-bind="args" :files="files" @select="onSelect" @remove="remove" /></div>',
  }),
}

/** Zona: Enabled · Error · Disabled y estados de archivo (Uploaded · Loading · Error). */
export const Estados: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbFileUploader },
    setup: () => ({
      list: [
        { id: '1', name: 'Filename.png', status: 'uploaded' },
        { id: '2', name: 'Filename.png', status: 'loading', progress: 60 },
        { id: '3', name: 'Filename.png', status: 'error', errorText: 'Supporting text' },
      ] satisfies DbUploadedFile[],
      grid: [
        { id: '4', name: 'Filename.png', status: 'uploaded', previewUrl: placeholder() },
        { id: '5', name: 'Filename.png', status: 'loading', progress: 40 },
      ] satisfies DbUploadedFile[],
    }),
    template: `<div class="db-ui flex flex-wrap gap-600 p-300">
      <DbFileUploader label="Lista" :files="list" supporting-text="imagen jpg o png - Max 2mb" />
      <DbFileUploader label="Grilla" :files="grid" layout="grid" />
      <div class="flex flex-col gap-300">
        <DbFileUploader label="Error" status="error" error-text="Formato no admitido" />
        <DbFileUploader label="Disabled" disabled />
      </div>
    </div>`,
  }),
}
