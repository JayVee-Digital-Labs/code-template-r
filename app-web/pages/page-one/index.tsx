import React, { Component } from 'react'
import { AppHeader, AppHero, AppMain } from 'app-ui'

import InternalLink from '../../components/Internal-Link'
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
    return <InternalLink href={link} text={text} />
  }

  render(): JSX.Element {
    const { pageConfig } = this.props

    return (
      <>
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
