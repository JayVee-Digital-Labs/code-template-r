import React, { Component } from 'react'
import Head from 'next/head'
import { AppHeader, AppHero, AppMain } from 'app-ui'

import InternalLink from '../components/Internal-Link'
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
    return <InternalLink href={link} text={text} key={link + text} />
  }

  render(): JSX.Element {
    const { pageConfig, version } = this.props

    return (
      <>
        <Head>
          <title>{pageConfig.title}</title>
          <meta name="version" content={version} />
        </Head>

        <AppHero>
          <AppHeader level="1">{pageConfig.header}</AppHeader>
        </AppHero>

        <AppMain>
          <nav>
            {pageConfig.navigation
              ? pageConfig.navigation.map(this.renderNavigationLinks)
              : null}
          </nav>
        </AppMain>
      </>
    )
  }
}
