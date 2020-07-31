import React, { Component } from 'react'
import { View } from 'react-native-web'
import tailwind from 'tailwind-rn'

import { Testable } from '../../../interfaces'

export default class AppHero extends Component<Testable> {
  render(): JSX.Element {
    const { children, testId } = this.props
    const STYLE = 'flex bg-gray-200 py-24 justify-center text-center'

    return (
      <View testID={testId} style={tailwind(STYLE)}>
        {children}
      </View>
    )
  }
}
