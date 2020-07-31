import * as React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import AppHeader, { HeaderLevels } from '.'
import SECTIONS from '../../../../.storybook/SECTIONS'

const headerLevels: HeaderLevels[] = ['1', '2', '3', '4', '5', '6']

export default {
  title: `${SECTIONS.SHARED}|Header`,
  component: AppHeader,
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs],
}

export const Default = (): React.ReactNode => (
  <AppHeader level={select('Header Levels (h1 - h6)', headerLevels, '1')}>
    {text('Header Text', 'Hello World')}
  </AppHeader>
)
