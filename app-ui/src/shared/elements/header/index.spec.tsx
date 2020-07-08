import React from 'react'
import { mount } from 'cypress-react-unit-test'

import AppHeader from '.'

const text = 'Hello World'

describe('Header Component', () => {
  it('should display text', () => {
    mount(<AppHeader>{text}</AppHeader>)
    cy.findByText(text).should('exist')
  })

  it('should match snapshot', () => {
    mount(<AppHeader>{text}</AppHeader>)
    cy.findByText(text).toMatchImageSnapshot()
  })
})
