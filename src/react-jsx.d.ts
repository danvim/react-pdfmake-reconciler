import { PdfElements, VirtualPdfElements } from "./types/PdfElements.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements extends PdfElements, VirtualPdfElements {}
  }
}
