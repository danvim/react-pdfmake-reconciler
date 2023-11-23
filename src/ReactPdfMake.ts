import ReactReconciler from "react-reconciler";
import { hostConfig } from "./hostConfig.ts";

export const ReactPdfMake = ReactReconciler(hostConfig);

ReactPdfMake.injectIntoDevTools({
  findFiberByHostInstance: () => null,
  bundleType: 1,
  version: __APP_VERSION__,
  rendererPackageName: "react-pdfmake-reconciler",
});
