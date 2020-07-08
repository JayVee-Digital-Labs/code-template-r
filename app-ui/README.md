# App UI

A React Base Design System with the intention of [_Write once, render anywhere_](https://github.com/necolas/react-native-web) philosophy. Of course not every part of the design system can be rendered at both systems, there will be some components specific for mobile and web. See [architecture](#Architecture) below.

## Technologies

The Technologies used:

- [React](https://github.com/necolas/react-native-web)
- [React Native Web](https://github.com/necolas/react-native-web)
- [Tailwind (Tailwind-rn)](https://github.com/vadimdemedes/tailwind-rn)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [React Test library](https://testing-library.com/)
- [Cypress](https://www.cypress.io/)
- [Cypress React Unit Test](https://github.com/bahmutov/cypress-react-unit-test)
- [Rollup](https://rollupjs.org/guide/en/)

**Know that in order to develop here, you must be familiar with the technologies listed here AND [React Native](https://reactnative.dev/)**

## Starting

1. In the root mono repo, make sure you are using the correct node version. This is done by using `nvm use`. Instructions should be in the root README.md.
1. Install the packages by running `npm i`.
1. Run `npm start`
1. Go to http://localhost:9009 to see design system.

## Contributing Guide

After running the [Starting](#Starting) guide:

1. Make changes and test them visually with Storybook
1. Once the desired component/element is completed, create unit tests for it using [image snapshot testing](https://github.com/meinaart/cypress-plugin-snapshots). See [Testing](#Testing) for more details.
1. Checkout to a new branch with he following format `{Feature/Fix/Chore/Test/Refactor}/#{Issue Number}/kabab-case-description`. Example `Feature/#45/Button-Component`.
1. Once done with development and testing, go back to the mono repo and run the commit command `npm run commit`. This will prompt commitizen style commits prompts
1. Push code to the Repository. Pre Test Hooks will run.
1. Open Pull Request, choose the appropriate template, and assign the appropriate reviewers.
1. Once Approved, merge code. Note you may not be able to merge code if it not re-based of master.

_This section may be moved to the top README_

## Architecture

Components developed here must be [dumb components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43). **Meaning components here should not do any kind of data manipulations or management. The sole purpose of this design system is to take in data and display them. Data manipulations and state management should be done by the consuming applications.**

Common Architecture follows:

_Note some of the folder structure is not implemented but this will be the intended design structure._

```
src/
  /shared     # Contains both Elements/Components for React and React Native.
  /web        # Contains Elements/Components for Web Only.
  /mobile     # Contains Elements/Components for Mobile only.
  /styles     # TODO: This will be the home for tailwind css configs
/cypress      # Contains Cypress Related files for testing. NOTE no spec files are located here.
/.storybook   # Storybook configuration.
/lib          # Distribution files for consuming applications.
```

Inside each folder, you should see the following. _Note some of the folder structure is not implemented but this will be the intended design structure._

```
/shared|web|mobile
  /elements     # Contains Simple UI elements. Such as Header, Buttons, etc.
  /components   # Contains components that should contain multiple elements
  /sections     # Contains multiple components as a section. THIS SHOULD BE CONSIDERED IF A SECTION CAN APPEAR MORE THAT ONE VIEW.
  /layouts      # Contains specific layouts such as grids and hero views.
```

Inside each folder, you should see the following files:

```
/elements|components|sections|layouts
  /component-name         # Folder Per Component
    /__image_snapshots__  # Image artifacts from cypress react unit tests with snapshot testing
      *.png               # Images for snapshot testing. NOTE there will be diffs and actual snapshots if tests fail.
    index.tsx             # Main Source Code for the component
    index.spec.tsx        # Test file for the components
    index.stories.tsx     # Storybook file for the component
  ...                     # Other components
```

**Any new components introduced will need to follow this structure**

## Testing

Testing will follow the philosophy:

1. **Treat every test as a black box test**. The test should not care for implementation details and private methods/properties. The test should only care about input and output to a extent. Trying to care for them will create test bloat and unnecessary hacks.
1. **No Shallow Rendering/Little Mocking Dependencies**. Referencing Kent C. Dodds article on [shallow rendering](https://kentcdodds.com/blog/why-i-never-use-shallow-rendering), we should not shallow render components or mock dependencies (internal to this package)(Exceptions are XHR Calls and window methods). Each consuming components/utility is part of the component, therefore to ensure that the contract between parent component and child component is honored, we do not mock/shallow render components. This is made sure that the test written in a way the user would use it.
1. **Write Tests on how a user would use it.**. Avoiding writing specs as `describe('button', () => { it('#click', () => { ...Test }) })`. We should write specs on how the user would use it. Such as `it('should turn green when clicked')`
1. **Include image snapshot when ever possible**. Testing for text asserts can only catch so much. Image snapshots can test specific CSS rendering and typically avoids a lot of overhead. This should be similar if a manual QA Tester comes in and checks for bugs. There are exceptions to this such as dynamic data where the fallback should be text assertions.
1. **Each bug fix must accompany a updated spec file**. This is soley the purpose of regression testing to make sure no bugs re-appear/

Given that, to write a test, be sure to include a `index.spec.tsx` file with each new component and bug fix. When updating snapshots, run `npm run test:update-snapshots`.

## Consuming

TODO: Should be addressed with [#30](https://github.com/joshvillahermosa/code-template-r/issues/30)

## Commands

| Command                | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| `build`                | Builds the design system for distribution and consuming   |
| `build:storybook`      | Builds Storybook as a static app                          |
| `lint`                 | This will lint the source code                            |
| `test`                 | This will run cypress react unit tests and snapshot tests |
| `test:update-snapshot` | This will update cypress image snapshots                  |
| `test:watch`           | This will launch Cypress to run test for any changes made |
| `start`                | This runs `npm run storybook`                             |
| `storybook`            | This will run the storybook server for Development        |

## Known issues

- [Removing React Scripts](https://github.com/joshvillahermosa/code-template-r/issues/31). This was built for early scaffolding. This may be no longer needed.
- [Lerna Linking causes Dist Issues](https://github.com/joshvillahermosa/code-template-r/issues/32)
- [Random Test Failure with LOC](https://github.com/joshvillahermosa/code-template-r/issues/33)

## Referencing Articles

- https://medium.com/@toastui/building-a-ui-library-capable-of-tree-shaking-from-a-to-z-b3f8a9be589f
- https://dev.to/lukasbombach/how-to-write-a-tree-shakable-component-library-4ied
- Cypress Image Snapshot Usage --> https://github.com/meinaart/cypress-plugin-snapshots/issues/54#issuecomment-555974108
- Research https://tailwindcss.com/docs/controlling-file-size
