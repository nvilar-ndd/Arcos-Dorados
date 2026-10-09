import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.ts'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: { name: '@storybook/vue3-vite', options: {} },
  // Speedee: archivos locales fuera de git (ver fonts/README.md)
  staticDirs: [{ from: '../fonts', to: '/fonts' }],
  docs: { defaultName: 'Docs' },
  core: { disableTelemetry: true },
}

export default config
