import App from '../../pages/_app'

/**
 * Yes I know this is not ideal but _app.tsx is mean to handle internal
 * NextJs and renders what ever NextJs passes. See:
 * https://github.com/vercel/next.js/discussions/13717#discussioncomment-21853
 */
describe('App', () => {
  it('should exist', () => {
    expect(App).toBeDefined()
  })
})
