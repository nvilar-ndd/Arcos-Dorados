/**
 * Color Guide de ilustraciones — Figma › Colors › "Iustraciones (uso exclusivo para ilustraciones)" (3514:478).
 * No son variables ni estilos de Figma: es una tabla de referencia para ilustración, por eso no está en
 * tokens/archway.tokens.json y no se usa en UI. `issue` marca los valores mal cargados en Figma (audit H-02).
 */
export interface IllustrationColor {
  name: string
  hex: string
  issue?: string
}

export const ILLUSTRATION_PALETTE: IllustrationColor[] = [
  { name: 'Ground Shadow', hex: '#F1F1F1', issue: 'En Figma figura #F1F1F (5 dígitos)' },
  { name: 'Big Mac Sauce & Wrap', hex: '#EDC8A3' },
  { name: 'English Muffin & Cone & Biscuit', hex: '#E5AF71' },
  { name: 'Bag & McCafé Drinks', hex: '#C2945C' },
  { name: 'Sesame Seed Bun & Artisanal Bun', hex: '#EC9D47', issue: 'En Figma sin #' },
  { name: 'Hashbrown', hex: '', issue: 'En Figma #E8970: falta un dígito' },
  { name: 'McNuggets & Filet-O-Fish & Breading', hex: '#D87714' },
  { name: 'Ham Light', hex: '#E9B3A8' },
  { name: 'Skin Tones Rose Beige', hex: '#ECA596' },
  { name: 'Skin Tones Umber', hex: '#B57C6F' },
  { name: 'Ham Dark', hex: '#AF6150', issue: 'En Figma sin #' },
  { name: 'Beef & Chocolate & BBQ Sauce', hex: '#73371F' },
  { name: 'McCafé & Black Coffee', hex: '#461E00' },
  { name: 'Sauce & Onions', hex: '#FFEBB8' },
  { name: 'Mustard', hex: '#FFD90D' },
  { name: 'Pickle Light', hex: '#E6E454' },
  { name: 'Lettuce Light', hex: '#9CC93A' },
  { name: 'Dark Card Green', hex: '#7EA824' },
  { name: 'Lettuce Dark', hex: '#66881E' },
  { name: 'Pickle Dark', hex: '#66881E', issue: 'Mismo valor que Lettuce Dark' },
  { name: 'Light Card Blue', hex: '#78B2C8' },
  { name: 'McFlurry Cup', hex: '#00A2C4' },
  { name: 'Light Card Teal', hex: '#6A8A99' },
  { name: 'Dark Card Blue', hex: '#4D8195' },
  { name: 'Dark Card Teal', hex: '#43616F' },
  { name: 'Neutral Grey', hex: '#EAEAEA' },
  { name: 'Light Card Purple', hex: '#A68AA3', issue: 'Fila repetida en Figma' },
  { name: 'Dark Card Purple', hex: '#7F657C' },
]
