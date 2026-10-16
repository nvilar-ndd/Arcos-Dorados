/** Datos de ejemplo para las stories (contenido de Figma). No forman parte de la librería. */
import {
  Award, CreditCard, Gamepad2, Globe, House, LayoutTemplate, Mic, Package, Percent, Receipt, ShoppingBag,
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

/** Árbol del panel izquierdo (IA v-09/03/26 + "Pagos" del componente). */
export const mainNav: DbNavNode[] = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'countries', label: 'Countries', icon: Globe },
  { id: 'restaurants', label: 'Restaurants', icon: Store, children: [
    { id: 'restaurants-list', label: 'Restaurants' },
    { id: 'country-maps', label: 'Country Maps' },
    { id: 'cumpleanos', label: 'Cumpleaños' },
  ] },
  { id: 'promotions', label: 'Promotions', icon: Percent },
  { id: 'orders', label: 'Orders', icon: Receipt },
  { id: 'envio', label: 'Costos de envío', icon: Truck },
  { id: 'fees', label: 'Fees', icon: CreditCard, children: [
    { id: 'service-fee', label: 'Service Fee' },
    { id: 'small-order-fee', label: 'Small Order Fee' },
  ] },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'cross-selling', label: 'Cross Selling', icon: ShoppingBag },
  { id: 'games', label: 'Games', icon: Gamepad2 },
  { id: 'loyalty', label: 'Loyalty', icon: Award, children: [
    { id: 'loyalty-main', label: 'Loyalty' },
    { id: 'digital-products', label: 'Productos digitales' },
  ] },
  { id: 'missions', label: 'Missions', icon: Trophy, children: [
    { id: 'misiones', label: 'Misiones' },
    { id: 'pines', label: 'Pines' },
  ] },
  { id: 'voice', label: 'Voice Orders', icon: Mic },
  { id: 'home-content', label: 'Home Content', icon: LayoutTemplate, children: [
    { id: 'banners', label: 'Home Banners' },
    { id: 'card', label: 'Card' },
    { id: 'modules', label: 'Modules' },
  ] },
  { id: 'app-content', label: 'App Content', icon: Smartphone, children: [
    { id: 'animaciones', label: 'Animaciones' },
    { id: 'primera-compra', label: 'Primera compra' },
    { id: 'app-versions', label: 'App Versions' },
  ] },
  { id: 'wallet', label: 'Wallet', icon: Wallet, children: [{ id: 'wallet-tiers', label: 'Wallet Tiers' }] },
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
