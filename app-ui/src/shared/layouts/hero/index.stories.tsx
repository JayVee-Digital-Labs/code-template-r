import * as React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { AppHeader } from '../../elements'
import SECTIONS from '../../../../.storybook/SECTIONS'
import AppHero from '.'

export default {
  title: `${SECTIONS.SHARED}|Hero`,
  component: AppHero,
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs],
}

export const Default = (): React.ReactNode => (
  <AppHero>
    <AppHeader level="1">{text('Enter Text', 'Hello World')}</AppHeader>
  </AppHero>
)
