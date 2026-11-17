/**
 * QA › Paridad Figma (oculto en el sidebar). Renderiza el template que llega en `?t=` con todos los
 * componentes Aw* registrados, para comparar contra las capturas de Figma con `scripts/parity`.
 * Ejemplo: iframe.html?id=qa-paridad-figma--render&t=<AwTag label="Label" />
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import * as UI from '../../../ui/src'

const components = Object.fromEntries(Object.entries(UI).filter(([k]) => k.startsWith('Aw')))

const meta = { title: 'QA/Paridad Figma', tags: ['!dev', '!autodocs'] } satisfies Meta
export default meta

export const Render: StoryObj = {
  render: () => {
    const q = new URLSearchParams(window.location.search)
    return {
      components,
      setup: () => ({ v: ref(q.get('v') ?? ''), on: ref(true), off: ref(false), n: ref(Number(q.get('n') ?? 0)) }),
      template: `<div data-parity style="display:inline-block;vertical-align:top;${q.get('w') ? `width:${q.get('w')}px` : ''}">${q.get('t') ?? ''}</div>`,
    }
  },
}
