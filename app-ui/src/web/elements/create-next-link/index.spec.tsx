import React from 'react'
import { mount } from 'cypress-react-unit-test'

import { createNextLink } from './'
import MockNextLink from './index.mock'

const href = '/'
const text = 'text'

describe('Creating a Web UI Next JS Link', () => {
  it('should match component html snapshot to match nextJs attributes', () => {
    const InternalLink = createNextLink(MockNextLink)
    mount(<InternalLink text={text} href={href} />)
    cy.findByText(text).toMatchSnapshot()
  })

  it('should match component image snapshot', () => {
    const InternalLink = createNextLink(MockNextLink)
    mount(<InternalLink text={text} href={href} />)
    cy.findByText(text).toMatchImageSnapshot()
  })

  it('should override default optional style', () => {
    const newStyle = {
      color: 'red',
    }

    const InternalLink = createNextLink(MockNextLink)
    mount(<InternalLink text={text} href={href} styleOptions={newStyle} />)
    cy.findByText(text).toMatchImageSnapshot()
  })

  it('should take in a optional key to match NextJs Attributes', () => {
    const key = 'key'
    const InternalLink = createNextLink(MockNextLink)

    mount(<InternalLink text={text} href={href} key={key} />)
    cy.findByText(text).toMatchSnapshot()
  })
})
