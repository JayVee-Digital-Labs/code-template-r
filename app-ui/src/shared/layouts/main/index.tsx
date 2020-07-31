import React, { Component, ReactNode } from 'react'
import { View } from 'react-native-web'
import tailwind from 'tailwind-rn'

import { Testable } from '../../../interfaces'

export default class AppMain extends Component<Testable> {
  render(): JSX.Element {
    const { children, testId } = this.props
    const STYLE = 'mx-8'

    return (
      <View testID={testId} style={tailwind(STYLE)}>
        {children}
      </View>
    )
  }
}
