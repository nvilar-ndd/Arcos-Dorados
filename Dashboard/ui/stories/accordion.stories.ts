import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Info } from 'lucide-vue-next'
import { DbAccordion } from '../src'

const meta = {
  title: 'Componentes/Accordion',
  component: DbAccordion,
  parameters: { controls: { disable: false } },
  args: { title: 'Title of accordion', disabled: false },
} satisfies Meta<typeof DbAccordion>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({
    components: { DbAccordion },
    setup: () => ({ args, open: ref(true) }),
    template: '<div class="max-w-[401px] p-300"><DbAccordion v-bind="args" v-model:open="open">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DbAccordion></div>',
  }),
}

export const Grupo: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbAccordion },
    setup: () => ({ Info, open: ref([true, false, false]) }),
    template: `<div class="flex max-w-[401px] flex-col p-300">
      <DbAccordion v-model:open="open[0]" title="¿Qué es una promoción por pasos?" :icon="Info">Se configura en etapas: detalles generales, disponibilidad, segmentación, contenido de apoyo y resumen.</DbAccordion>
      <DbAccordion v-model:open="open[1]" title="¿Cuándo se publica?">Al confirmar el resumen, queda en estado Pendiente de publicar.</DbAccordion>
      <DbAccordion v-model:open="open[2]" title="Sección deshabilitada" disabled>—</DbAccordion>
    </div>`,
  }),
}
