import * as React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import SECTIONS from '../../../../.storybook/SECTIONS'

import MockNextLink from './index.mock'
import { createNextLink } from './'

const NextLink = createNextLink(MockNextLink)

export default {
  title: `${SECTIONS.WEB}|Next Link (Using Mock Link For Composition)`,
  component: NextLink,
  decorators: [withKnobs],
}

export const Default = (): React.ReactNode => (
  <NextLink
    text={text('Text to display', 'Go Home')}
    href={text('Internal NextJs Route', '/')}
    styleOptions={{
      color: text('Color Override', 'green'),
    }}
  />
)
