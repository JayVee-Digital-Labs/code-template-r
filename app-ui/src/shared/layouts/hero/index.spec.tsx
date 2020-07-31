import React from 'react'
import { mount } from 'cypress-react-unit-test'

import AppHero from './'

const children = <h1>{'Hello World'}</h1>
const testId = 'test'

describe('App Hero', () => {
  it('should match image snapshot', () => {
    mount(<AppHero testId={testId}>{children}</AppHero>)
    cy.findByTestId(testId).toMatchImageSnapshot()
  })
})
