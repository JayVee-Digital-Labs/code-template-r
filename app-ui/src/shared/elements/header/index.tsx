import React, { Component, ReactNode } from 'react'
import { Text } from 'react-native-web'
import tailwind from 'tailwind-rn'

export type HeaderLevels = '1' | '2' | '3' | '4' | '5' | '6'
export interface AppHeaderProps {
  // Undefined will result in a h1
  level?: HeaderLevels
}

export default class AppHeader extends Component<AppHeaderProps> {
  private getHeaderStyle(level: HeaderLevels): string {
    const map = {
      '1': '6',
      '2': '5',
      '3': '4',
      '4': '3',
      '5': '2',
      '6': '',
    }

    return map[level]
  }

  render(): JSX.Element {
    const DEFAULT_HEADER = '1'
    const { children, level } = this.props
    const levelMap = level ? this.getHeaderStyle(level) : DEFAULT_HEADER

    const ACCESSIBILITY_ROLE = 'header'
    const STYLE = `text-${levelMap}xl`

    return (
      <Text
        accessibilityRole={ACCESSIBILITY_ROLE}
        aria-level={level}
        // Temp Style
        style={tailwind(STYLE)}
      >
        {children}
      </Text>
    )
  }
}
