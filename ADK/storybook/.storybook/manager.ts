import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'ADK · Advance Kiosk',
    brandUrl: 'https://github.com/nvilar-ndd/Arcos-Dorados/tree/main/ADK',
    colorPrimary: '#FFBC0D',
    colorSecondary: '#292929',
    appBg: '#F9F9F9',
    appBorderRadius: 8,
    textColor: '#292929',
    barSelectedColor: '#292929',
    fontBase: '"Speedee", "Helvetica Neue", Arial, system-ui, sans-serif',
  }),
})
