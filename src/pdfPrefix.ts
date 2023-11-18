export const pdfPrefix = "pdf-" as const;

export type PdfPrefixed<K extends string> = `${typeof pdfPrefix}${K}`;
