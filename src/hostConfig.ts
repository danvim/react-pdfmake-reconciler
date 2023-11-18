import { HostConfig } from "react-reconciler";
import { Content } from "pdfmake/interfaces";
import { DefaultEventPriority } from "react-reconciler/constants";
import {
  PdfCellProps,
  PdfPrimitiveType,
  PdfReconcilerElement,
  PdfReconcilerIntrinsicType,
  PdfReconcilerNode,
  VirtualPdfPrimitiveType,
} from "./types/PdfElements.ts";
import { Container } from "./types/Container.ts";
import { pdfPrefix, PdfPrefixed } from "./pdfPrefix.ts";

const rootHostContext = {};
const childHostContext = {};

export interface HostContext {}

export type TextInstance = string | number;

export const hostConfig: HostConfig<
  PdfReconcilerIntrinsicType,
  Record<string, unknown>,
  Container,
  PdfReconcilerNode,
  TextInstance,
  never,
  never,
  PdfReconcilerNode,
  HostContext,
  boolean,
  Array<PdfReconcilerNode>,
  number,
  -1
> = {
  supportsMutation: false,
  supportsPersistence: true,
  supportsHydration: false,
  createInstance: (type, props) => {
    console.log("createInstance");
    console.log("Type", type);

    if (type === "pdf-array") return [];

    if (type === "pdf-cell") {
      // Cell doesn't constitute an element, but carries extra props to element below
      const { children, ...tableCellProps } = props as unknown as PdfCellProps;

      console.log("Cell", children);

      return {
        $__reactPdfMakeType: children.type as PdfReconcilerIntrinsicType,
        ...tableCellProps,
      } satisfies PdfReconcilerElement;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children: _, ...restProps } = props;

    return {
      $__reactPdfMakeType: type,
      ...restProps,
    };
  },
  createTextInstance: (text) => {
    console.log("create text instance", text);
    return text;
  },
  appendInitialChild: (parent, child) => {
    pdfAppendChild(parent, child);
  },
  finalizeInitialChildren: () => false,
  prepareUpdate: () => true,
  shouldSetTextContent: () => false,
  getRootHostContext: () => rootHostContext,
  getChildHostContext: () => childHostContext,
  getPublicInstance: (instance) => instance,
  prepareForCommit: () => null,
  resetAfterCommit: () => {},
  preparePortalMount: () => {
    console.error("Portal is not supported");
  },
  scheduleTimeout: globalThis.setTimeout,
  cancelTimeout: globalThis.clearTimeout,
  beforeActiveInstanceBlur: () => {},
  afterActiveInstanceBlur: () => {},
  prepareScopeUpdate: () => {},
  getInstanceFromScope: () => null,
  detachDeletedInstance: () => {},
  noTimeout: -1,
  isPrimaryRenderer: true,
  getCurrentEventPriority: () => DefaultEventPriority,
  getInstanceFromNode: () => null,
  // Persistence mode
  cloneInstance: (
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    _,
    keepChildren,
    recyclableInstance,
  ) => {
    const { children, ...restNewProps } = newProps;

    const contentKey = getContentKey(type);

    if (contentKey === null) {
      throw new Error("Unexpected branch");
    }

    const newInstance: PdfReconcilerElement = {
      $__reactPdfMakeType: type,
      [contentKey]: keepChildren ? children : [],
      ...restNewProps,
    };

    console.log("Clone instance", {
      newInstance,
      instance,
      updatePayload,
      type,
      oldProps,
      newProps,
      keepChildren,
      recyclableInstance,
    });

    return newInstance;
  },
  createContainerChildSet: (container) => {
    console.log("Container", container);

    return [];
  },
  appendChildToContainerChildSet: (childSet, child) => {
    childSet.push(child);
  },
  finalizeContainerChildren: (container, newChildren) => {
    console.log("finalizeContainerChildren", container, newChildren);
    container[container.$__reactPdfMakeType] = newChildren;
    container.onUpdate(newChildren as Content);
  },
  replaceContainerChildren: () => {
    /* noop */
  },
  cloneHiddenInstance: () => {
    throw new Error("Clone hidden instance not implemented");
  },
  cloneHiddenTextInstance: () => {
    throw new Error("Clone hidden text instance not implemented");
  },
};

const removePdfTypePrefix = <K extends VirtualPdfPrimitiveType>(
  pdfReconcilerIntrinsicType: PdfPrefixed<K>,
): K => {
  const prefixIndex = pdfReconcilerIntrinsicType.indexOf(pdfPrefix);

  if (prefixIndex !== 0) {
    throw new Error("Unsupported element: " + pdfReconcilerIntrinsicType);
  }

  return pdfReconcilerIntrinsicType.slice(pdfPrefix.length) as K;
};

const pdfAppendChild = (
  parent: PdfReconcilerNode,
  child: PdfReconcilerNode,
): void => {
  console.log("append child", parent, child);

  // TextInstance
  if (typeof parent !== "object") {
    throw new Error("Cannot append to text instance");
  }

  // Inline
  if (Array.isArray(parent)) {
    parent.push(child);
    return;
  }

  const contentKey = getContentKey(parent.$__reactPdfMakeType);

  if (contentKey === null) {
    return;
  }

  // Typical object content

  const content = parent[contentKey];

  if (content === undefined) {
    // First append
    if (contentKey === "body") {
      parent[contentKey] = [child];
      return;
    }

    parent[contentKey] = child;
  } else if (!Array.isArray(content)) {
    // create array and append child
    parent[contentKey] = [content, child];
  } else {
    console.log("Content already array", content, child);

    // reuse array and append child
    parent[contentKey] = [...content, child];
  }
};

const getContentKey = (
  key: PdfReconcilerIntrinsicType,
): PdfPrimitiveType | "body" | "title" | null => {
  const baseType = removePdfTypePrefix(key);

  if (baseType === "array" || baseType === "cell" || baseType === "root") {
    return null;
  }

  if (baseType === "tbody") {
    return "body";
  }

  if (baseType === "anchor" || baseType === "tocItem") {
    return "text";
  }

  if (baseType === "toc") {
    return "title";
  }

  return baseType;
};
