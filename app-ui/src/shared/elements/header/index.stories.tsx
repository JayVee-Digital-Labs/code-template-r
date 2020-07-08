import * as React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import AppHeader, { HeaderLevels } from '.'

const headerLevels: HeaderLevels[] = ['1', '2', '3', '4', '5', '6']

export default {
  title: 'Header',
  component: AppHeader,
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs],
}

export const Default = (): React.ReactNode => (
  <AppHeader level={select('Header Levels (h1 - h5)', headerLevels, '1')}>
    {text('Header Text', 'Hello World')}
  </AppHeader>
)
