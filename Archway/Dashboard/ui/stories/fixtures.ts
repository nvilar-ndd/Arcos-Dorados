/** Datos de ejemplo para las stories (contenido de Figma). No forman parte de la librería. */
import {
  Award, Cake, CreditCard, Gamepad2, Globe, House, LayoutTemplate, Mic, Package, Percent, Receipt,
  Smartphone, Store, Trophy, Truck, Wallet,
} from 'lucide-vue-next'
import type { DbNavNode } from '../src'

/** Imagen de relleno tipo "tablero de ajedrez" como en Figma (sólo para demo). */
export function placeholder(label = '', w = 500, h = 440): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
<defs><pattern id="p" width="32" height="32" patternUnits="userSpaceOnUse"><rect width="32" height="32" fill="#f2f2f2"/><rect width="16" height="16" fill="#e4e4e4"/><rect x="16" y="16" width="16" height="16" fill="#e4e4e4"/></pattern></defs>
<rect width="100%" height="100%" fill="url(#p)"/>${label ? `<text x="50%" y="50%" font-family="sans-serif" font-size="28" fill="#6f6f6f" text-anchor="middle" dominant-baseline="middle">${label}</text>` : ''}</svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Árbol del panel izquierdo — IA v-03/11/26 (⮑ UI shell, sección 6892:6697), con las etiquetas del
 * componente Header+PanelLeft. Sale Fees y Cross Selling; Delivery agrupa Costos de envío y ETA;
 * Agenda de cumpleaños pasa a primer nivel. Los subítems de Restaurants no están detallados en v-03/11/26
 * (dice "SUB MENU"): se mantienen los de v-09/03/26.
 */
export const mainNav: DbNavNode[] = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'countries', label: 'Countries', icon: Globe },
  { id: 'restaurants', label: 'Restaurants', icon: Store, children: [
    { id: 'restaurants-list', label: 'Restaurants' },
    { id: 'country-maps', label: 'Country Maps' },
  ] },
  { id: 'promotions', label: 'Promotions', icon: Percent },
  { id: 'orders', label: 'Orders', icon: Receipt },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'delivery', label: 'Delivery', icon: Truck, children: [
    { id: 'envio', label: 'Costos de envío' },
    { id: 'eta', label: 'ETA' },
  ] },
  { id: 'birthdays', label: 'Agenda de cumpleaños', icon: Cake },
  { id: 'app-content', label: 'App Content', icon: Smartphone, children: [
    { id: 'animaciones', label: 'Animaciones' },
    { id: 'primera-compra', label: 'Campañas primera compra' },
    { id: 'legal', label: 'Legal' },
  ] },
  { id: 'wallet', label: 'Wallet', icon: Wallet, children: [{ id: 'wallet-tiers', label: 'Wallet Tiers' }] },
  { id: 'missions', label: 'Missions', icon: Trophy, children: [
    { id: 'misiones', label: 'Misiones' },
    { id: 'pines', label: 'Pines' },
  ] },
  { id: 'loyalty', label: 'Loyalty', icon: Award, children: [
    { id: 'digital-products', label: 'Productos digitales' },
    { id: 'cashback', label: 'Cashback' },
  ] },
  { id: 'home-content', label: 'Home Content', icon: LayoutTemplate, children: [
    { id: 'cards', label: 'Cards' },
    { id: 'banners', label: 'Banners' },
    { id: 'modules', label: 'Modules' },
    { id: 'product-list', label: 'Product List' },
    { id: 'popup', label: 'Pop-up' },
  ] },
  { id: 'payments', label: 'Pagos', icon: CreditCard, children: [{ id: 'installments', label: 'Pago en cuotas' }] },
  { id: 'voice', label: 'Voice Orders', icon: Mic },
  { id: 'games', label: 'Games', icon: Gamepad2 },
]

/** Árbol de Country → Configuration (SubPanelLeft). */
export const countryNav: DbNavNode[] = [
  { id: 'detail', label: 'Detail' },
  { id: 'main', label: 'Main', children: [{ id: 'main-main', label: 'Main' }, { id: 'app-version', label: 'App Version' }] },
  { id: 'products', label: 'Products', children: [
    { id: 'categories', label: 'Categories & Products' },
    { id: 'c-cross', label: 'Cross-Selling' },
  ] },
  { id: 'services', label: 'Services', children: [
    { id: 'delivery', label: 'Delivery Other Settings' },
    { id: 'pickup', label: 'PickUp' },
  ] },
  { id: 'integrations', label: 'Integrations' },
  { id: 'validations', label: 'Validations', children: [{ id: 'fiscal', label: 'Fiscal Fields' }] },
  { id: 'c-promotions', label: 'Promotions' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'c-loyalty', label: 'Loyalty' },
  { id: 'payment', label: 'Payment' },
  { id: 'currency', label: 'Currency' },
  { id: 'rating', label: 'Rating' },
  { id: 'tips', label: 'Tips' },
  { id: 'push', label: 'Push' },
  { id: 'anti-fraud', label: 'Anti-Fraud' },
  { id: 'cancellations', label: 'Cancellations', children: [{ id: 'refunds', label: 'Refunds' }] },
]

export const countries = [
  { value: 'ar', label: 'Argentina' },
  { value: 'br', label: 'Brasil' },
  { value: 'cl', label: 'Chile' },
  { value: 'co', label: 'Colombia' },
  { value: 'mx', label: 'México' },
  { value: 'uy', label: 'Uruguay' },
]

/** Pseudo-estados forzados (storybook-addon-pseudo-states) por clase. */
export const pseudo = {
  pseudo: {
    hover: ['.is-hover', '.is-hover *'],
    focusVisible: ['.is-focus', '.is-focus *'],
    focusWithin: ['.is-focus', '.is-focus *'],
    active: ['.is-active', '.is-active *'],
  },
}
