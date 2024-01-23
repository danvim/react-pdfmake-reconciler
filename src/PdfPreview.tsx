import { FC, HTMLAttributes, useEffect, useMemo, useState } from "react";
import {
  BufferOptions,
  TDocumentDefinitions,
  TFontDictionary,
} from "pdfmake/interfaces";
import { PdfNode } from "./types/PdfNode.ts";
import pdfMake from "pdfmake/build/pdfmake.js";
import { PdfRenderer } from "./PdfRenderer.tsx";

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

export interface PdfPreviewProps extends HTMLAttributes<HTMLIFrameElement> {
  /** Nodes that result to pdf-* intrinsic elements. */
  children?: PdfNode;
  tableLayouts?: BufferOptions["tableLayouts"];
  fonts?: TFontDictionary;
}

export const PdfPreview: FC<PdfPreviewProps> = ({
  children,
  tableLayouts,
  fonts,
  ...props
}) => {
  const document = useRenderDocument(children as PdfNode);
  const pdfObjectUrl = usePdfObjectLink(document, tableLayouts, fonts);

  return (
    <iframe
      src={pdfObjectUrl !== null ? pdfObjectUrl : "data/html,<p>Loading...</p>"}
      {...props}
    />
  );
};

const usePdfObjectLink = (
  document: TDocumentDefinitions,
  tableLayouts: BufferOptions["tableLayouts"],
  fonts: TFontDictionary | undefined,
): string | null => {
  const [link, setLink] = useState<string | null>(null);

  const generatePdf = useMemo(
    () =>
      debounce((document: TDocumentDefinitions) => {
        pdfMake
          .createPdf(document, tableLayouts, fonts ?? defaultFonts)
          .getBlob((blob) => {
            // console.log("New PDF rendered");
            setLink(URL.createObjectURL(blob));
          });
      }, 50),
    [tableLayouts, fonts],
  );

  useEffect(() => {
    generatePdf(document);
  }, [document, generatePdf]);

  return link;
};

const useRenderDocument = (pdfElement: PdfNode): TDocumentDefinitions => {
  const [document, setDocument] = useState<TDocumentDefinitions>({
    content: [],
  });

  useEffect(() => {
    // console.log("Pdf has changed");
    const { unmount } = PdfRenderer.render(pdfElement, setDocument);

    return unmount;
  }, [pdfElement]);

  return document;
};

function debounce<A extends unknown[]>(
  cb: (...args: A) => void,
  delay: number,
): (...args: A) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
