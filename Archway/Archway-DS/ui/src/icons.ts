/**
 * Íconos de Iconography (Figma 7Hb0VVgTTN1q1RMnVWFYvd), 24px Outline, desde icons/archway-icons.json.
 * Se pintan con `currentColor`: el color lo pone el token Icon/* del componente.
 */
import source from '../../icons/archway-icons.json'

export interface AwIconPath {
  d: string
  evenOdd?: boolean
}
export interface AwIconDef {
  figma: string
  viewBox: number
  paths: AwIconPath[]
}

export const AW_ICONS = source.icons as Record<string, AwIconDef>
export type AwIconName = keyof typeof source.icons
