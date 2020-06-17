import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { PageConfig } from '../../types'
import { setUpTestNavigation } from '../../utils/test-helpers'

import Index, { Props } from '../../pages/index'

const version = '1.0.0-test'

const pageConfig: PageConfig = {
  header: 'Header Text',
  navigation: [
    { link: 'sample-link', text: 'sample text' },
    { link: 'sample-link-two', text: 'sample text two' },
  ],
  title: 'Sample title',
}

const renderComponent = ({ pageConfig, version }: Props) => {
  return render(<Index pageConfig={pageConfig} version={version} />)
}

const { testNavigation } = setUpTestNavigation({
  renderFunction: renderComponent,
  pageConfig,
  click: fireEvent.click,
})

describe('Home Page', () => {
  it('should display header text', async () => {
    const { findByText } = renderComponent({ pageConfig, version })
    const text = await findByText(pageConfig.header)
    expect(text).toBeDefined()
  })

  describe('Home Page Navigation', () => {
    // Test that each navigation is tested
    pageConfig.navigation.map(testNavigation)
  })
})
