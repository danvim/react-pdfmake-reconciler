import { Attributes } from "react";
import { PdfElement, PdfNode } from "./PdfNode.ts";
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

type PdfProps<P> = P & Attributes;

type PdfPropsWithChildren<P = object> = PdfProps<P> & {
  children?: PdfNode;
};

type PassThroughPdfProps<P> = PdfProps<P> & {
  children: PdfElement;
};

export interface PdfElements {
  "pdf-text": PdfPropsWithChildren<
    | Omit<ContentText, "text">
    | Omit<ContentLink, "text">
    | Omit<ContentAnchor, "text">
    | Omit<ContentTocItem, "text">
  >;
  "pdf-columns": PdfPropsWithChildren<Omit<ContentColumns, "columns">>;
  "pdf-stack": PdfPropsWithChildren<Omit<ContentStack, "stack">>;
  "pdf-ol": PdfPropsWithChildren<Omit<ContentOrderedList, "ol">>;
  "pdf-ul": PdfPropsWithChildren<Omit<ContentUnorderedList, "ul">>;
  "pdf-table": PdfPropsWithChildren<Omit<ContentTable, "table">>;
  "pdf-pageReference": { children: string } & Omit<
    ContentPageReference,
    "pageReference"
  >;
  "pdf-textReference": { children: string } & Omit<
    ContentTextReference,
    "textReference"
  >;
  "pdf-image": ContentImage;
  "pdf-svg": ContentSvg;
  "pdf-qr": ContentQr;
  "pdf-canvas": ContentCanvas;
}

type RemovePdfPrefix<S> = S extends `pdf-${infer U}` ? U : never;

type ContentKey = RemovePdfPrefix<keyof PdfElements> | "body" | "title";

export interface VirtualPdfElements {
  /** Maps content array. */
  "pdf-array": PdfPropsWithChildren;
  /** Type-safe way to pass cell-related properties to child element. */
  "pdf-cell": PassThroughPdfProps<TableCellProperties>;
  /** Type-safe way to pass column-related properties to child element. */
  "pdf-column": PassThroughPdfProps<ColumnProperties>;
  /** Type-safe way to pass list item-related properties to child element. */
  "pdf-li": PassThroughPdfProps<
    OrderedListElementProperties | UnorderedListElementProperties
  >;
  "pdf-tbody": PdfPropsWithChildren<Omit<Table, "body">>;
  "pdf-toc": PdfPropsWithChildren<Omit<TableOfContent, "title">>;
}

export type PdfReconcilerIntrinsicType =
  | keyof VirtualPdfElements
  | keyof PdfElements;

export type VirtualContentKey =
  | RemovePdfPrefix<keyof VirtualPdfElements>
  | ContentKey;

export interface PdfReconcilerElement {
  $__reactPdfMakeType: PdfReconcilerIntrinsicType;
  [K: string]: unknown;
}

export type TextInstance = string | number;

export type PdfReconcilerNode =
  | PdfReconcilerElement
  | TextInstance
  | Array<PdfReconcilerNode>;
