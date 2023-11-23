import { FC, ReactPortal, useEffect } from "react";
import { PdfNode } from "../types/PdfNode.ts";
import { DynamicPdfNode } from "../types/DynamicPdfNode.tsx";
import { PdfContextType, usePdfContext } from "./PdfProvider.ts";
import { PdfRenderer } from "../PdfRenderer.tsx";
import {
  Content,
  DynamicContent,
  TDocumentDefinitions,
} from "pdfmake/interfaces";
import { Container } from "../types/Container.ts";
import { ReactPdfMake } from "../ReactPdfMake.ts";

export interface PdfMarginContentProps {
  children: PdfNode | DynamicPdfNode;
}

type OnlyContainerKeys<T> = {
  [K in keyof T]: Container extends T[K] ? K : never;
}[keyof T];

type OnlyDynamicContentKeys<T> = {
  [K in keyof Required<T>]: Content | DynamicContent extends T[K] ? K : never;
}[keyof T];

export const withPdfMarginContent = (
  containerKey: OnlyContainerKeys<PdfContextType>,
  documentContentKey: OnlyDynamicContentKeys<TDocumentDefinitions>,
  displayName: string,
) => {
  const PdfMargin: FC<PdfMarginContentProps> = ({ children }) => {
    const { updateDocumentDefinitions, [containerKey]: marginContainer } =
      usePdfContext();

    useEffect(() => {
      if (typeof children === "function") {
        updateDocumentDefinitions({
          [documentContentKey]: (...args: Parameters<DynamicContent>) =>
            PdfRenderer.renderOnce(
              typeof children === "function" ? children(...args) : children,
            ).content,
        });
      } else {
        updateDocumentDefinitions({
          [documentContentKey]: marginContainer.content as Content,
        });
      }
    }, [children, marginContainer.content, updateDocumentDefinitions]);

    return typeof children === "function"
      ? null
      : (ReactPdfMake.createPortal(
          children,
          marginContainer,
          null,
          null,
        ) as unknown as ReactPortal);
  };

  PdfMargin.displayName = displayName;

  return PdfMargin;
};
