import { ContentUpdateHandler } from "./ContentUpdateHandler.ts";
import { PdfReconcilerNode } from "./PdfElements.ts";

export interface Container {
  children: PdfReconcilerNode;
  onUpdate: ContentUpdateHandler;
}
