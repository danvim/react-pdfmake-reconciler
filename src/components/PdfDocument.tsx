import { FC, memo, ReactNode, useEffect } from "react";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { usePdfContext } from "./PdfProvider.ts";

type PdfDocumentProps = Omit<TDocumentDefinitions, "content"> & {
  children?: ReactNode;
};
const BasePdfDocument: FC<PdfDocumentProps> = ({ children, ...props }) => {
  const { updateDocumentDefinitions } = usePdfContext();

  useEffect(() => {
    updateDocumentDefinitions(props);
  }, [props, updateDocumentDefinitions]);

  return children;
};

BasePdfDocument.displayName = "PdfDocument";

export const PdfDocument = memo(BasePdfDocument);
