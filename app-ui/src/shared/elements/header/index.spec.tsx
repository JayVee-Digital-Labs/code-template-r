import React from 'react'
import { mount } from 'cypress-react-unit-test'

import AppHeader, { HeaderLevels } from '.'

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

  describe('Header Levels', () => {
    const headerLevels: HeaderLevels[] = ['1', '2', '3', '4', '5', '6']

    const runHeaderLevelTest = (level: HeaderLevels) => {
      it(`should render header level ${level}`, () => {
        mount(<AppHeader level={level}>{text}</AppHeader>)
        cy.findByText(text).toMatchImageSnapshot()
      })
    }

    headerLevels.forEach(runHeaderLevelTest)
  })
})
