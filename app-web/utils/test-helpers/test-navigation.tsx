import React from 'react'
import { PageConfig, NavigationLink } from '../../types'

/**
 * Ideally we want to make this pure by putting the implementation inside `testNavigation` but
 * we are not able to move it up. It currently throws a routing error and will take time to investigate.
 *
 * TODO: Make this into a pure function
 * https://github.com/joshvillahermosa/code-template-r/issues/20
 */
interface Props {
  children: JSX.Element
}
const clickSpy = jest.fn()
jest.mock('next/link', () => {
  const MockRender = ({ children }: Props): JSX.Element => {
    return <span onClick={clickSpy}>{children}</span>
  }

  return MockRender
})

export type TestNavigation = (NavigationLink) => void

export interface TestNavigationOptions {
  renderFunction: ({ pageConfig: PageConfig }) => { findByText; debug? }
  pageConfig: PageConfig
  click: (element: Document | Node | Element | Window) => boolean
}

export interface TestFunctions {
  testNavigation: TestNavigation
}

/**
 * A curried function. This will take in a set of options and return another function to call to test navigation links
 */
export const setUpTestNavigation = ({
  renderFunction,
  pageConfig,
  click,
}: TestNavigationOptions): TestFunctions => ({
  /**
   * This will test each link
   */
  testNavigation: (navigationLink: NavigationLink): void => {
    it(`should allow the user to go to "${navigationLink.text}" specified in the pageConfig`, async () => {
      const { findByText } = renderFunction({ pageConfig })
      const text = await findByText(navigationLink.text)
      click(text)
      expect(clickSpy).toHaveBeenCalledTimes(1)
      clickSpy.mockClear()
    })
  },
})
