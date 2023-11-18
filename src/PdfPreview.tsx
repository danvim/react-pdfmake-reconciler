import { FC, useEffect, useState } from "react";
import { Content } from "pdfmake/interfaces";
import { PdfNode } from "./types/PdfNode.ts";
import pdfMake from "pdfmake/build/pdfmake";
import { PdfRenderer } from "./PdfRenderer.ts";

export const PdfPreview: FC<{ children?: PdfNode }> = ({ children }) => {
  const content = useRenderContent(children as PdfNode);
  const pdfObjectUrl = usePdfObjectLink(content);

  return (
    <div>
      <div>
        {pdfObjectUrl !== null ? (
          <iframe style={{ width: 1000, height: 500 }} src={pdfObjectUrl} />
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

const usePdfObjectLink = (content: Content): string | null => {
  const [link, setLink] = useState<string | null>(null);

  useEffect(() => {
    const blobPromise = new Promise<Blob>((resolve) => {
      pdfMake
        .createPdf({
          content,
        })
        .getBlob(resolve);
    });

    blobPromise.then((blob) => {
      console.log("New PDF rendered");
      setLink(URL.createObjectURL(blob));
    });
  }, [content]);

  return link;
};

const useRenderContent = (pdfElement: PdfNode): Content => {
  const [content, setContent] = useState<Content>([]);

  useEffect(() => {
    console.log("Pdf has changed");
    const { unmount } = PdfRenderer.render(pdfElement, setContent);

    return () => {
      unmount();
    };
  }, [pdfElement]);

  return content;
};
