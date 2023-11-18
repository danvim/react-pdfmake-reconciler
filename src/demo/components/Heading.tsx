import { FC } from "react";
import { PdfNode } from "../../types/PdfNode.ts";

export const Heading: FC<{ children?: PdfNode }> = ({ children }) => (
  <pdf-text fontSize={24} marginBottom={24}>
    {children}
  </pdf-text>
);
