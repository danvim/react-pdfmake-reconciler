import { PdfNode } from "./types/PdfNode.ts";
import ReactReconciler from "react-reconciler";
import { hostConfig } from "./hostConfig.ts";
import { ContentUpdateHandler } from "./types/ContentUpdateHandler.ts";
import { Container } from "./types/Container.ts";
import { Content } from "pdfmake/interfaces";

const ReactReconcilerInst = ReactReconciler(hostConfig);

export const PdfRenderer = {
  render: (reactElement: PdfNode, onUpdate: ContentUpdateHandler) => {
    const container: Container = {
      $__reactPdfMakeType: "pdf-root",
      onUpdate,
    };
    const root = ReactReconcilerInst.createContainer(
      container,
      0,
      null,
      true,
      false,
      "",
      () => {},
      null,
    );

    // console.log("root", root);

    ReactReconcilerInst.updateContainer(reactElement, root, null);
    ReactReconcilerInst.injectIntoDevTools({
      bundleType: 1,
      version: "1",
      rendererPackageName: "react-pdfmake-reconciler",
    });

    const unmount = () => {
      // console.log("Unmounting");
      ReactReconcilerInst.updateContainer([], root, null);
    };

    return { container, root, unmount };
  },
  renderOnce: async (renderElement: PdfNode): Promise<Content> =>
    new Promise((resolve) => {
      const { unmount } = PdfRenderer.render(renderElement, (content) => {
        resolve(content);
        unmount();
      });
    }),
};
