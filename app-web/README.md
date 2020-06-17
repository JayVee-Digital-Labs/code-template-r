# App Web

A [NextJs](https://nextjs.org/) Web Repository.

## Commands

Commands are intended to run as `npm run <COMMAND>`. See [NextJs CLI](https://nextjs.org/docs/api-reference/cli) for more details.

| Command           | Description                                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `build`           | TThis will start [NextJs Build](https://nextjs.org/docs/api-reference/cli#build) .                                                                                                                    |
| `dev`             | This will start [NextJs Development mode](https://nextjs.org/docs/api-reference/cli#development) .                                                                                                    |
| `start`           | This will start [NextJs Production Mode](https://nextjs.org/docs/api-reference/cli#production) .                                                                                                      |
| `test`            | This will run `test:unit`, see below .                                                                                                                                                                |
| `test:unit`       | Runs Unit Tests using [Jest](https://jestjs.io/) and [React Test Library](https://testing-library.com/docs/react-testing-library/intro). This will also generate a coverage report under `./coverage` |
| `test:unit:watch` | Runs `test:unit` in watch mode                                                                                                                                                                        |

## Folder structure

Please review [NextJs](https://nextjs.org/) to have a better understanding of the architecture

```
/__test__             # Testing folder, view the README inside
/pages                # NextJs Pages
  _app.tsx            # App Wrapper Component. Go here to add globals
  index.tsx           # Index or the Home Page
  /page-one           # Sample page to test routing
    index.tsx         # Main page for Sample Page
/components           # Typically shared components
  main-layout.tsx     # Main Layout
...
```
