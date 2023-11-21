# React PDF Make Reconciler

This package lets you create PDFs using PDF Make and React.

[![npm version](https://img.shields.io/npm/v/react-pdfmake-reconciler.svg?logo=npm)](https://www.npmjs.com/package/react-pdfmake-reconciler)

## Installation

This package is available on [NPM](https://www.npmjs.com/package/react-pdfmake-reconciler).

```shell
npm i react-pdfmake-reconciler
```

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
/// <reference types="react-pdfmake-reconciler/react-jsx" />

import { PdfRenderer } from 'react-pdfmake-reconciler/PdfRenderer'

const {unmount} = PdfRenderer.render(
  <pdf-text bold>Hello World!</pdf-text>,
  content => console.log(content)
)

/*
Console:
{
  text: 'Hello World!'
  bold: true
}
*/

// Call unmount to detach node tree.
unmount()
```

```tsx
import { PdfRenderer } from 'react-pdfmake-reconciler/PdfRenderer'

const content = await PdfRenderer.renderOnce(<pdf-text bold>Hello World!</pdf-text>)
```
