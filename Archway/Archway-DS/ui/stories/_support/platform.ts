import type { Component } from 'vue'
import PlatformCode from './PlatformCode.vue'

export interface PlatformSources { web: string; ios: string; android: string; iosNote?: string; androidNote?: string }

/**
 * Story "Web · iOS · Android": la demo web en vivo + el código de las tres plataformas.
 * `template` es el markup de la demo (usa los componentes pasados) y `state` su estado reactivo.
 */
export function platformStory(code: PlatformSources, components: Record<string, Component>, template: string, state: () => Record<string, unknown> = () => ({})) {
  return {
    name: 'Web · iOS · Android',
    parameters: { controls: { disable: true }, layout: 'padded' },
    render: () => ({
      components: { PlatformCode, ...components },
      setup: () => ({ code, ...state() }),
      template: `<PlatformCode v-bind="code">${template}</PlatformCode>`,
    }),
  }
}

export const IOS_NATIVE = 'En iOS este componente es nativo (Nivel 0, Liquid Glass): ArchWay sólo aporta tokens y textos.'
export const NOT_COMPILED = 'Código fuente del paquete. No se compiló en este entorno: validarlo en Xcode / Android Studio.'
