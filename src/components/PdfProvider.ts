import { TDocumentDefinitions } from "pdfmake/interfaces";
import { createContext, useContext } from "react";
import { Container } from "../types/Container.ts";
import { createContainer } from "../createContainer.ts";

export interface PdfContextType {
  updateDocumentDefinitions: (
    documentDefinitions: Partial<TDocumentDefinitions>,
  ) => void;
  headerContainer: Container;
  footerContainer: Container;
}

export const PdfContext = createContext<PdfContextType>({
  updateDocumentDefinitions: () => {},
  headerContainer: createContainer(),
  footerContainer: createContainer(),
});

PdfContext.displayName = "PdfContext";

export const PdfProvider = PdfContext.Provider;

export const usePdfContext = (): PdfContextType => useContext(PdfContext);
