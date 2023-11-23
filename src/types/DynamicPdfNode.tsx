import { DynamicContent } from "pdfmake/interfaces";
import { PdfNode } from "./PdfNode.ts";

export type DynamicPdfNode = (...args: Parameters<DynamicContent>) => PdfNode;
