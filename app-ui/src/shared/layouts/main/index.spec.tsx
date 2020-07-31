import React from 'react'
import { mount } from 'cypress-react-unit-test'

import AppMain from './'

const children = <h1>{'Hello World'}</h1>
const testId = 'test'

describe('App Main Layout', () => {
  it('should match image snapshot', () => {
    mount(<AppMain testId={testId}>{children}</AppMain>)
    cy.findByTestId(testId).toMatchImageSnapshot()
  })
})
