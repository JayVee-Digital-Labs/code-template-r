import React, { Component, ReactNode } from 'react'
import { Text } from 'react-native-web'
import tailwind from 'tailwind-rn'

export type HeaderLevels = '1' | '2' | '3' | '4' | '5' | '6'
export interface AppHeaderProps {
  children: ReactNode

  // Undefined will result in a h1
  level?: HeaderLevels
}

export default class AppHeader extends Component<AppHeaderProps> {
  private DEFAULT_HEADER = '1'

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
    const { children, level } = this.props
    const levelMap = level ? this.getHeaderStyle(level) : this.DEFAULT_HEADER
    return (
      <Text
        accessibilityRole="header"
        aria-level={level}
        // Temp Style
        style={tailwind(`text-${levelMap}xl`)}
      >
        {children}
      </Text>
    )
  }
}
