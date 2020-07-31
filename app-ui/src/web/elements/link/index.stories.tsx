import * as React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import SECTIONS from '../../../../.storybook/SECTIONS'

import AppWebLink from '.'

export default {
  title: `${SECTIONS.WEB}|Web Link`,
  component: AppWebLink,
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs],
}

export const Default = (): React.ReactNode => (
  <AppWebLink
    text={text('Text to display', 'Hello World')}
    href={text('URL to display', 'https://google.com')}
    color={text('Color String', 'green')}
  />
)
