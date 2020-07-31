# `create-next-link`

Takes in a [NEXT JS Link](https://nextjs.org/docs/api-reference/next/link) and wraps it around a styled component.

## Example Usage

**This is intended to create a new component in the consuming web app, and be used for it's link**

```tsx
// NextLink.tsx
import { createLink } from 'app-ui'
import Link from 'next/link'

export default createLink(Link)
```

Then use as:

```tsx
import React, { Component } from 'react'
import NextLink from './NextLink'

export default class Index extends Component<Props>: JSX.Element {
  render(): JSX.Element {
    const styleOptions = {
      color: 'green'
    }

    return (<NextLink href={'/'} key={'random-unique-key'} text={'Go Home'} styleOptions={styleOptions}/>)
  }
}
```
