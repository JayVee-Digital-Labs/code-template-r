import React, { Component } from 'react'
import { render } from '@testing-library/react'
import MainLayout from '../../components/main-layout'

class SampleComponent extends Component {
  render() {
    return <div>Sample Component</div>
  }
}

describe('Main Layout', () => {
  it('should match snapshot with rendered Child Components', () => {
    const { container } = render(
      <MainLayout>
        <SampleComponent />
      </MainLayout>
    )
    expect(container).toMatchSnapshot()
  })
})
