import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Dashboard · Arcos Dorados',
    brandUrl: 'https://github.com/nvilar-ndd/Arcos-Dorados/tree/main/Dashboard',
    colorPrimary: '#FFBC0D',
    colorSecondary: '#292929',
    appBg: '#F5F5F5',
    appBorderRadius: 8,
    textColor: '#292929',
    barSelectedColor: '#292929',
    fontBase: '"Speedee", "Helvetica Neue", Arial, system-ui, sans-serif',
  }),
})
