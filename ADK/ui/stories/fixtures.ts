/** Datos de ejemplo para las stories (contenido de Figma). No forman parte de la librería. */
import { BadgePercent, House, Star } from 'lucide-vue-next'
import type { AdkNavItem, AdkSizeOption } from '../src'

/** Imagen de relleno tipo "tablero" como en Figma (sólo demo: las fotos de producto las provee la app). */
export function placeholder(label = '', w = 208, h = 208): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
<defs><pattern id="p" width="32" height="32" patternUnits="userSpaceOnUse"><rect width="32" height="32" fill="#f9f9f9"/><rect width="16" height="16" fill="#eaeaea"/><rect x="16" y="16" width="16" height="16" fill="#eaeaea"/></pattern></defs>
<rect width="100%" height="100%" fill="url(#p)"/>${label ? `<text x="50%" y="50%" font-family="sans-serif" font-size="20" fill="#6f6f6f" text-anchor="middle" dominant-baseline="middle">${label}</text>` : ''}</svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

export const sections: AdkNavItem<'home' | 'loyalty' | 'coupons'>[] = [
  { value: 'home', label: 'Home', icon: House },
  { value: 'loyalty', label: "MiMcDonald's", icon: Star },
  { value: 'coupons', label: 'Cupones', icon: BadgePercent },
]

export const categories = ['Hamburguesas', 'McCombos', 'Pollo', 'Acompañamientos', 'Bebidas', 'Postres', 'McCafé']

export const products = [
  { name: 'Big Mac', price: '₡ 4.950,00', badge: 'new' as const },
  { name: 'Cuarto de Libra', price: '₡ 5.200,00', badge: 'best-seller' as const },
  { name: 'McNífica', price: '₡ 5.450,00' },
  { name: 'Doble Cheddar', price: '₡ 4.300,00', badge: 'off' as const },
  { name: 'McPollo', price: '₡ 3.900,00', unavailable: true },
  { name: 'Tasty Doble', price: '₡ 5.900,00', badge: 'last-days' as const },
]

export const sizes: AdkSizeOption<'g' | 'm' | 'p' | 'c'>[] = [
  { value: 'g', short: 'G', label: 'Grande', price: '₡1.100,00', upcharge: '+ ₡2.000,00' },
  { value: 'm', short: 'M', label: 'Mediano', price: '₡1.100,00' },
  { value: 'p', short: 'P', label: 'Pequeño', price: '₡1.100,00' },
  { value: 'c', short: 'A', label: 'A la carta' },
]

export const docOptions = [
  { value: 'fisica', label: 'Cédula Física' },
  { value: 'juridica', label: 'Cédula Jurídica' },
  { value: 'dimex', label: 'DIMEX' },
  { value: 'nite', label: 'NITE' },
]

/** Pseudo-estados forzados (storybook-addon-pseudo-states). En kiosco "Hover" de Figma = :active. */
export const pseudo = {
  pseudo: {
    focusVisible: ['.is-focus', '.is-focus *'],
    active: ['.is-active', '.is-active *'],
  },
}
