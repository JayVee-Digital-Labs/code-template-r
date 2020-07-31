import React from 'react'
import { mount } from 'cypress-react-unit-test'

import AppLink from '.'

const text = 'Hello World'
const href = 'http://test.com'
const color = 'red'

describe('Web Link Component', () => {
  it('should display text', () => {
    mount(<AppLink text={text} href={href} />)
    cy.findByText(text).should('exist')
  })

  it('should match snapshot', () => {
    mount(<AppLink text={text} href={href} />)
    cy.findByText(text).toMatchImageSnapshot()
  })

  describe('Setting Link Color', () => {
    it(`should default to green if no color prop is passed in`, () => {
      mount(<AppLink text={text} href={href} />)
      cy.findByText(text).toMatchImageSnapshot()
    })

    it(`should take in a color prop ${color} and display it`, () => {
      mount(<AppLink text={text} href={href} color={color} />)
      cy.findByText(text).toMatchImageSnapshot()
    })
  })
})
