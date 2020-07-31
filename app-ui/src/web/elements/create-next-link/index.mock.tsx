import React, { Component } from 'react'

interface Props {
  href: string
  key?: string
}

export default class MockNextLink extends Component<Props> {
  render(): JSX.Element {
    const { children, href, key } = this.props

    return (
      <a href={href} key={key}>
        {children}
      </a>
    )
  }
}
