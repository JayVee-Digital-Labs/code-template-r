import * as React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { AppHeader } from '../../elements'
import SECTIONS from '../../../../.storybook/SECTIONS'

import AppMain from '.'

export default {
  title: `${SECTIONS.SHARED}|Main View`,
  component: AppMain,
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs],
}

export const Default = (): React.ReactNode => (
  <AppMain>
    <AppHeader level="1">Hello World</AppHeader>
  </AppMain>
)
