# Unit Test Directory

## Preface

All unit tests must go here for the sake of NextJs's [build process](https://github.com/vercel/next.js/issues/1914). _Although I disagree putting all files here in this type of folder structure, the core team will not adopt the feature. Until someone makes a PR/Fork for this change, we will need accommodate this structure for now_.

## Philosophy

Similar to Testing Libraries [principles](https://testing-library.com/docs/guiding-principles), we encourage to write tests as a contract. Meaning write tests that will do according to what the component under tests does or how a user would use it. The test should not care for internal mechanisms and should be written as a [black box test](https://en.wikipedia.org/wiki/Black-box_testing).

## Testing Tools Used

- [Jest](https://jestjs.io/)
- [React Test Library](https://testing-library.com/docs/react-testing-library/intro)

Please read them to understand how to write unit tests

## Unit Test Contributing Guide

1. After (Or before if you are doing TDD), create the tests and follow the folder structure as in root. Example for `pages/index.ts`, create a folder in `__tests__/pages/index.spec.tsx`.
1. Run your tests to make sure they pass

## Testing Meta Tag and title

Currently it looks like there is no way to test items put in the `<head>` will be rendered by react test library, per [discussion](https://github.com/vercel/next.js/discussions/11060?sort_order=chronological#discussioncomment-26941). To test title and meta tag elements, use Cypress for integration testing.
