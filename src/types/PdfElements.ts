import {
  ColumnProperties,
  ContentAnchor,
  ContentCanvas,
  ContentColumns,
  ContentImage,
  ContentLink,
  ContentOrderedList,
  ContentPageReference,
  ContentQr,
  ContentStack,
  ContentSvg,
  ContentTable,
  ContentText,
  ContentTextReference,
  ContentTocItem,
  ContentUnorderedList,
  OrderedListElementProperties,
  Table,
  TableCellProperties,
  TableOfContent,
  UnorderedListElementProperties,
} from "pdfmake/interfaces";
import { PdfElement, PdfNode } from "./PdfNode.ts";

import { PdfPrefixed } from "../pdfPrefix.ts";
import { TextInstance } from "../hostConfig.ts";
import { Attributes } from "react";

interface PdfElementAttributes extends Attributes {
  children?: PdfNode;
}

export interface PdfSingleChildElementProps extends PdfElementAttributes {
  children: PdfElement;
}

export interface PdfElementsSansPrefix {
  text: PdfElementAttributes &
    (
      | Omit<ContentText, "text">
      | Omit<ContentLink, "text">
      | Omit<ContentAnchor, "text">
      | Omit<ContentTocItem, "text">
    );
  columns: PdfElementAttributes & Omit<ContentColumns, "columns">;
  stack: PdfElementAttributes & Omit<ContentStack, "stack">;
  ol: PdfElementAttributes & Omit<ContentOrderedList, "ol">;
  ul: PdfElementAttributes & Omit<ContentUnorderedList, "ul">;
  table: PdfElementAttributes & Omit<ContentTable, "table">;
  pageReference: { children: string } & Omit<
    ContentPageReference,
    "pageReference"
  >;
  textReference: { children: string } & Omit<
    ContentTextReference,
    "textReference"
  >;
  image: ContentImage;
  svg: ContentSvg;
  qr: ContentQr;
  canvas: ContentCanvas;
}
export interface PdfCellProps
  extends TableCellProperties,
    PdfSingleChildElementProps {}

export interface PdfColumnProps
  extends ColumnProperties,
    PdfSingleChildElementProps {}

export type PdfListItemProps = (
  | OrderedListElementProperties
  | UnorderedListElementProperties
) &
  PdfSingleChildElementProps;

export interface VirtualPdfElementsSansPrefix extends PdfElementsSansPrefix {
  array: PdfElementAttributes;
  cell: PdfCellProps;
  column: PdfColumnProps;
  li: PdfListItemProps;
  tbody: PdfElementAttributes & Omit<Table, "body">;
  toc: PdfElementAttributes & Omit<TableOfContent, "title">;
}

export type PdfElements = {
  [K in keyof VirtualPdfElementsSansPrefix as PdfPrefixed<K>]: VirtualPdfElementsSansPrefix[K];
};

export type PdfPrimitiveType = keyof PdfElementsSansPrefix;

export type VirtualPdfPrimitiveType =
  | PdfPrimitiveType
  | keyof VirtualPdfElementsSansPrefix
  | "root";

export type PdfReconcilerIntrinsicType = PdfPrefixed<VirtualPdfPrimitiveType>;

export interface PdfReconcilerElement {
  $__reactPdfMakeType: PdfReconcilerIntrinsicType;
  [K: string]: unknown;
}

export type PdfReconcilerNode =
  | PdfReconcilerElement
  | TextInstance
  | Array<PdfReconcilerNode>;
