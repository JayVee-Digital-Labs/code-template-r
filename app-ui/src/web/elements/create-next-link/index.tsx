import React, { Component, ComponentType } from 'react'
import { Properties as CSSProperties } from 'csstype'
export interface NextLinkCommonProps {
  href: string
  key?: string
}

export interface AppNextLinkProps extends NextLinkCommonProps {
  text: string
  styleOptions?: CSSProperties
}

export const createNextLink = (
  // TODO: See https://github.com/joshvillahermosa/code-template-r/issues/37
  NextLinkComponent: any
): ComponentType<AppNextLinkProps> => {
  return class AppNextLink extends Component<
    AppNextLinkProps & NextLinkCommonProps
  > {
    render(): JSX.Element {
      const DEFAULT_STYLE_OPTIONS = {
        color: 'green',
      }

      const { text, href, key, styleOptions } = this.props

      const style = styleOptions
        ? Object.assign({}, DEFAULT_STYLE_OPTIONS, styleOptions)
        : DEFAULT_STYLE_OPTIONS

      return (
        <NextLinkComponent href={href} key={key}>
          <a style={{ ...style }}>{text}</a>
        </NextLinkComponent>
      )
    }
  }
}
