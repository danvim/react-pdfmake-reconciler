import { ContentUpdateHandler } from "./ContentUpdateHandler.ts";

import { PdfReconcilerElement } from "./PdfElements.ts";

export interface Container extends PdfReconcilerElement {
  $__reactPdfMakeType: "pdf-root";
  onUpdate: ContentUpdateHandler;
}
