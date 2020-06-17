import React, { Component } from 'react'
import Link from 'next/link'

import MainLayout from '../../components/main-layout'
import { PageConfig, NavigationLink } from '../../types'
import CONFIG from '../../config.json'

interface Props {
  pageConfig: PageConfig
}

export default class Index extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return { pageConfig: CONFIG.pages['page-one'] }
  }

  renderNavigationLinks({ link, text }: NavigationLink): JSX.Element {
    // TODO: Implement a Link Component when Implementing StoryBook
    return (
      <Link href={link} key={text + link}>
        <a>{text}</a>
      </Link>
    )
  }

  render(): JSX.Element {
    const { pageConfig } = this.props

    return (
      <MainLayout>
        {/* TODO: Implement a H1 Component when Implementing StoryBook */}
        <h1>{pageConfig.header}</h1>

        {/* TODO: Implement a Nav UI Component when Implementing StoryBook */}
        <nav>
          {pageConfig.navigation ? pageConfig.navigation.map(this.renderNavigationLinks) : null}
        </nav>
      </MainLayout>
    )
  }
}
