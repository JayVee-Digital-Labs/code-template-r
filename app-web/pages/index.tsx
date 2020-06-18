import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import MainLayout from '../components/main-layout'
import { PageConfig, NavigationLink } from '../types'
import CONFIG from '../config.json'
import PACKAGE_JSON from '../package.json'

export interface Props {
  pageConfig: PageConfig
  version: string
}

export default class Index extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    const pageConfig = CONFIG.pages.index
    const version = PACKAGE_JSON.version
    return { pageConfig, version }
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
    const { pageConfig, version } = this.props

    return (
      <MainLayout>
        <Head>
          <title>{pageConfig.title}</title>
          <meta name="version" content={version} />
        </Head>

        {/* TODO: Implement a H1 Component when Implementing StoryBook */}
        <h1>{pageConfig.header}</h1>

        {/* TODO: Implement a Nav UI Component when Implementing StoryBook */}
        <nav>
          {pageConfig.navigation
            ? pageConfig.navigation.map(this.renderNavigationLinks)
            : null}
        </nav>
      </MainLayout>
    )
  }
}
