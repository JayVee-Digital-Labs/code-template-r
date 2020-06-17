import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { PageConfig } from '../../../types'
import { setUpTestNavigation } from '../../../utils/test-helpers'

import Index from '../../../pages/page-one/index'

interface RenderComponentOptions {
  pageConfig: PageConfig
}

const pageConfig: PageConfig = {
  header: 'Header Text',
  navigation: [
    { link: 'sample-link', text: 'sample text' },
    { link: 'sample-link-two', text: 'sample text two' },
  ],
}

const renderComponent = ({ pageConfig }: RenderComponentOptions) => {
  return render(<Index pageConfig={pageConfig} />)
}

const { testNavigation } = setUpTestNavigation({
  renderFunction: renderComponent,
  pageConfig,
  click: fireEvent.click,
})

describe('Page One', () => {
  it('should display header text', async () => {
    const { findByText } = renderComponent({ pageConfig })
    const text = await findByText(pageConfig.header)
    expect(text).toBeDefined()
  })

  describe('Page One Navigation', () => {
    // Test that each navigation is tested
    pageConfig.navigation.map(testNavigation)
  })
})
