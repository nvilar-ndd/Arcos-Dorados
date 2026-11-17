/**
 * Íconos de Iconography (Figma 7Hb0VVgTTN1q1RMnVWFYvd), 24px Outline, desde icons/archway-icons.json.
 * Se pintan con `currentColor`: el color lo pone el token Icon/* del componente.
 */
import source from '../../icons/archway-icons.json'

export interface AwIconPath {
  d: string
  evenOdd?: boolean
  /** Parte calada del glifo (Figma la pinta blanca): se dibuja con Icon/on-color. */
  knockout?: boolean
  /** Detalle interior oscuro (Figma #292929): se dibuja con Icon/primary. */
  inner?: boolean
}
export interface AwIconDef {
  figma: string
  viewBox: number
  paths: AwIconPath[]
  /** Dibujo propio de otro tamaño en Iconography (p. ej. 16px), cuando no es el de 24 escalado. */
  sizes?: Record<string, { viewBox: number; paths: AwIconPath[] }>
}

export const AW_ICONS = source.icons as unknown as Record<string, AwIconDef>
/** Direcciones del Chevron: en Iconography es un solo ícono (hacia arriba) con variante Direction. */
export const AW_ICON_ALIASES = {
  'chevron-right': { icon: 'chevron-up', rotate: 90 },
  'chevron-down': { icon: 'chevron-up', rotate: 180 },
  'chevron-left': { icon: 'chevron-up', rotate: 270 },
} as const

export type AwIconName = keyof typeof source.icons | keyof typeof AW_ICON_ALIASES
