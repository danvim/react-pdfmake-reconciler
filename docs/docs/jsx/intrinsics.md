---
sidebar_position: 1
---

# Intrinsic elements

This package defines the following list of intrinsic elements.

## Trivial elements

These are defined such that the reasonable content property is made the `children` of the element, and that property is made the name of the element.

```tsx twoslash
/// <reference types="react-pdfmake-reconciler/react-jsx" />
const text = <pdf-text></pdf-text>;
//            ^?

const columns = <pdf-columns></pdf-columns>;
//               ^?

const stack = <pdf-stack></pdf-stack>;
//             ^?

const ol = <pdf-ol></pdf-ol>;
//          ^?

const ul = <pdf-ul></pdf-ul>;
//          ^?

const table = <pdf-table></pdf-table>;
//             ^?

const pageReference = <pdf-pageReference>ref</pdf-pageReference>;
//                     ^?

const textReference = <pdf-textReference>ref</pdf-textReference>;
//                     ^?

const image = <pdf-image image="myImage" />;
//             ^?

const svg = <pdf-svg svg="<svg></svg>" />;
//           ^?

const qr = <pdf-qr qr="hello" />;
//          ^?

const canvas = <pdf-canvas canvas={[]} />;
//              ^?
```

## Virtual elements

In addition to the above intrinsic elements, there are also these which are categorized as **virtual elements**. These are, in one way or another, specially treated by the renderer where the content key doesn't match the name, or they do not correlate to a rendered content object.

```tsx twoslash
/// <reference types="react-pdfmake-reconciler/react-jsx" />
const array = <pdf-array></pdf-array>;
//             ^?

const cell = (
  <pdf-cell>
    // ^?
    <pdf-text></pdf-text>
  </pdf-cell>
);

const column = (
  <pdf-column>
    // ^?
    <pdf-text></pdf-text>
  </pdf-column>
);

const li = (
  <pdf-li>
    // ^?
    <pdf-text></pdf-text>
  </pdf-li>
);

const tbody = <pdf-tbody>{[]}</pdf-tbody>;
//             ^?

const toc = <pdf-toc></pdf-toc>;
//           ^?
```
