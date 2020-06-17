import React, { Component, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default class MainLayout extends Component<LayoutProps> {
  render(): JSX.Element {
    const { children } = this.props
    return <main>{children}</main>
  }
}
