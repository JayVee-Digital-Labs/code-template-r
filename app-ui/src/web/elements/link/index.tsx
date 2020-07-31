import React, { Component } from 'react'
import tailwind from 'tailwind-rn'

export interface AppLinkProps {
  text: string
  href: string
  color?: string
}

export default class AppWebLink extends Component<AppLinkProps> {
  render(): JSX.Element {
    const DEFAULT_COLOR = 'green'

    const { text, href, color: colorProp } = this.props
    const color = colorProp ? colorProp : DEFAULT_COLOR

    const STYLE = `hover:underline text-${color}-700`
    const TARGET = '_blank'

    return (
      <a href={href} target={TARGET} style={tailwind(STYLE)}>
        {text}
      </a>
    )
  }
}
