import { PdfNode } from "./types/PdfNode.ts";
import { DocumentUpdateHandler } from "./types/DocumentUpdateHandler.ts";
import { Container } from "./types/Container.ts";
import { Content, TDocumentDefinitions } from "pdfmake/interfaces";
import { PdfProvider } from "./components/PdfProvider.ts";
import { createContainer } from "./createContainer.ts";
import { ReactPdfMake } from "./ReactPdfMake.ts";

export const PdfRenderer = {
  render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {
    const rootContainer: Container = createContainer({ onUpdate });
    const headerContainer: Container = createContainer();
    const footerContainer: Container = createContainer();

    const root = ReactPdfMake.createContainer(
      rootContainer,
      0,
      null,
      true,
      false,
      "",
      () => {},
      null,
    );

    // console.log("root", root);
    ReactPdfMake.updateContainer(
      <PdfProvider
        value={{
          updateDocumentDefinitions: (d) => {
            rootContainer.otherDocumentDefinitions = {
              ...rootContainer.otherDocumentDefinitions,
              ...d,
            };
            onUpdate({
              ...rootContainer.otherDocumentDefinitions,
              content: rootContainer.content as Content,
            });
          },
          headerContainer,
          footerContainer,
        }}
      >
        {reactElement}
      </PdfProvider>,
      root,
      null,
    );

    const unmount = () => {
      // console.log("Unmounting");
      ReactPdfMake.updateContainer(null, root, null);
    };

    return { container: rootContainer, root, unmount };
  },
  renderOnce: (renderElement: PdfNode): TDocumentDefinitions => {
    const { container, unmount } = PdfRenderer.render(renderElement, () => {});

    ReactPdfMake.flushSync();

    const content = container.content as Content;

    unmount();

    return {
      ...container.otherDocumentDefinitions,
      content,
    };
  },
};
