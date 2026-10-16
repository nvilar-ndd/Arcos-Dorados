import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { BadgePercent, CircleUserRound, CreditCard, Tag } from 'lucide-vue-next'
import { DbCard, DbCardField, DbCardOption, DbCardTable, DbDivider, DbImageCard } from '../src'
import { placeholder } from './fixtures'

const meta = {
  title: 'Componentes/Card',
  component: DbCard,
  parameters: { controls: { disable: true } },
  args: { title: 'Numero o titulo' },
} satisfies Meta<typeof DbCard>
export default meta
type Story = StoryObj<typeof meta>

/** Card-Base · Card_Info · Card_Descripcion · Card_Table (Figma 2857:32116). */
export const Tipos: Story = {
  render: () => ({
    components: { DbCard, DbCardField, DbCardTable, DbDivider },
    setup: () => ({ CircleUserRound, Tag }),
    template: `<div class="db-ui flex flex-wrap items-start gap-400 p-300">
      <DbCard variant="base" eyebrow="Lorem" title="Numero o titulo" :icon="CircleUserRound" />

      <DbCard variant="info" title="Numero o titulo" :icon="CircleUserRound">
        <DbCardField label="Lorem" :tag="{ label: 'Text', tone: 'warning' }" />
        <DbCardField label="Lorem" value="Porcentaje al producto" layout="stack" />
        <DbDivider />
        <DbCardField label="Tipo" value="Porcentaje al producto" layout="stack" />
      </DbCard>

      <DbCard variant="description" title="Numero o titulo" :icon="Tag" detail-href="#detalle">
        <DbCardField label="subtitle" :tag="{ label: 'Text' }" />
        <DbCardField label="Info" value="Info destacada" layout="stack" />
        <DbDivider />
        <DbCardField label="Info" value="Info destacada" layout="stack" />
        <DbCardTable :columns="['Tittle', '100', '100']" :rows="[['Monto mínimo', '100', '100']]" caption="Montos" />
        <DbDivider />
        <DbCardField label="Monto mínimo" :tag="{ label: 'Text' }" />
      </DbCard>

      <DbCard variant="table" title="Numero o titulo" :icon="CircleUserRound">
        <DbCardField label="Texto" value="Contenido" />
        <DbCardTable :columns="['Texto', 'Texto', 'Texto']" :rows="[['Contenido', 'Contenido', 'Contenido'], ['Contenido', 'Contenido', 'Contenido'], ['Contenido', 'Contenido', 'Contenido']]" caption="Detalle" />
      </DbCard>
    </div>`,
  }),
}

/** Card_Option y Cards_Category: enabled · pressed (seleccionada). */
export const Navegables: Story = {
  render: () => ({
    components: { DbCardOption },
    setup: () => ({ BadgePercent, CreditCard, sel: ref('pago') }),
    template: `<div class="db-ui flex flex-col gap-400 p-300">
      <div class="flex flex-col gap-200">
        <DbCardOption title="Title" description="Description" :icon="CreditCard" link-label="Ver" href="#" />
        <DbCardOption title="Title" description="Description" :icon="CreditCard" :selected="true" />
      </div>
      <div class="flex gap-200">
        <DbCardOption v-for="c in [['pago', 'Descuento por método de pago'], ['producto', 'Descuento por producto'], ['pedido', 'Descuento por pedido']]" :key="c[0]"
          variant="category" :title="c[1]" :icon="BadgePercent" :selected="sel === c[0]" @click="sel = c[0]" />
      </div>
    </div>`,
  }),
}

export const ConImagen: Story = {
  name: 'Cards_img',
  render: () => ({
    components: { DbImageCard },
    setup: () => ({ src: placeholder(), items: ref(['Nombre de pin', 'Nombre de pin 2']) }),
    template: `<div class="db-ui flex gap-300 p-300">
      <DbImageCard v-for="(n, i) in items" :key="n" :src="src" alt="" :label="n" :selected="i === 1" @remove="items.splice(i, 1)" />
    </div>`,
  }),
}
