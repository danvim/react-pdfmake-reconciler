---
sidebar_position: 2
---

# PdfRenderer

## Render to React loop

```tsx twoslash
import { PdfRenderer } from "react-pdfmake-reconciler";

const { unmount } = PdfRenderer.render(
  <pdf-text>Hello world!</pdf-text>,
  (updatedDoc) => {
    console.log("updated");
  },
);

// When unmounting
unmount();
```

## Static render

```tsx twoslash
import { PdfRenderer } from "react-pdfmake-reconciler";

const doc = PdfRenderer.renderOnce(<pdf-text>Hello world!</pdf-text>);
```

## Full example

```tsx twoslash
import pdfMake from "pdfmake/build/pdfmake.js";
import type {
  BufferOptions,
  TDocumentDefinitions,
  TFontDictionary,
} from "pdfmake/interfaces";
import { PdfRenderer } from "react-pdfmake-reconciler";

const doc = PdfRenderer.renderOnce(<pdf-text>Hello world!</pdf-text>);

const defaultFonts: TFontDictionary = {
  Roboto: {
    normal:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Regular.ttf",
    bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Medium.ttf",
    italics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Italic.ttf",
    bolditalics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-MediumItalic.ttf",
  },
};

pdfMake.createPdf(doc, undefined, defaultFonts).download("myDocument.pdf");
```
