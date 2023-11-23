import { DocumentUpdateHandler } from "./DocumentUpdateHandler.ts";
import { PdfReconcilerNode } from "./PdfElements.ts";
import { TDocumentDefinitions } from "pdfmake/interfaces";

export interface Container {
  content: PdfReconcilerNode;
  onUpdate: DocumentUpdateHandler;
  otherDocumentDefinitions: Omit<TDocumentDefinitions, "content">;
}
