import { PdfElements } from "./types/PdfElements.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements extends PdfElements {}
  }
}
