# React PDF Make Reconciler

This project explores making PDFs using PDF Make and React.

## Features

- Write complex PDF in JSX. Render JSX into PDF Make content structure.
- Utilize React features like:
  - Context. Note that outside React context does not penetrate into PDF renderer.
  - Components
  - Hooks
- Working React update loop, (although it is unlikely to trigger user events inside PDF.)
  - e.g. async setState calls
- Code autocomplete in JSX for "PDF Make components"

## Running demo

```shell
pnpm i
pnpm dev
```

## Using as library

See `/demo` for a more extensive example.

```tsx
/// <reference types="react-pdfmake-reconciler/reactExtension" />

import { PdfRenderer } from 'react-pdfmake-reconciler/PdfRenderer'

const {unmount} = PdfRenderer.render(
  <pdf-text bold>Hello World!</pdf-text>,
  content => console.log(content)
)

/*
{
  text: 'Hello World!'
  bold: true
}
*/

// Call unmount to detach node tree.
unmount()
```

```tsx
import type { Content } from 'pdfmake/interfaces'

const renderContentImmediately = new Promise<Content>(resolve => {
  const {unmount} = PdfRenderer.render(
    <pdf-text bold>Hello World!</pdf-text>,
    content => {
      resolve(content)
      unmount()
    }
  )
})
```