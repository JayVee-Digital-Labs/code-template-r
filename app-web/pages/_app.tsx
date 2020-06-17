import React, { Component } from 'react'

import { AppProps } from 'next/app'

export default class App extends Component<AppProps> {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
