import { HostConfig } from "react-reconciler";
import { Content } from "pdfmake/interfaces";
import { DefaultEventPriority } from "react-reconciler/constants";
import {
  PdfReconcilerElement,
  PdfReconcilerIntrinsicType,
  PdfReconcilerNode,
  TextInstance,
  VirtualContentKey,
} from "./types/PdfElements.ts";
import { Container } from "./types/Container.ts";
import { pdfPrefix, PdfPrefixed } from "./pdfPrefix.ts";

export interface HostContext {}

const rootHostContext: HostContext = {};
const childHostContext: HostContext = {};

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
    // console.log("createInstance");
    // console.log("Type", type);

    if (type === "pdf-array") return [];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children: _, ...restProps } = props;

    return {
      $__reactPdfMakeType: type,
      ...restProps,
    };
  },
  createTextInstance: (text) => {
    // console.log("create text instance", text);
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
  preparePortalMount: () => {},
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
    _instance,
    _updatePayload,
    type,
    _oldProps,
    newProps,
    _,
    keepChildren,
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

    return newInstance;
  },
  createContainerChildSet: () => {
    return [];
  },
  appendChildToContainerChildSet: (childSet, child) => {
    childSet.push(child);
  },
  finalizeContainerChildren: (container, newChildren) => {
    // console.log("finalizeContainerChildren", container, newChildren);
    const newContainerChildren: PdfReconcilerNode =
      newChildren.length === 1 ? newChildren[0] : newChildren;
    container.content = newContainerChildren;
    container.onUpdate({
      ...container.otherDocumentDefinitions,
      content: newContainerChildren as Content,
    });
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

const removePdfTypePrefix = <K extends VirtualContentKey>(
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
  _child: PdfReconcilerNode,
): void => {
  // console.log("append child", parent, child);
  const child = getRealChild(_child);

  // TextInstance
  if (typeof parent !== "object") {
    throw new Error("Cannot append to text instance");
  }

  // Array
  if (Array.isArray(parent)) {
    parent.push(child);
    return;
  }

  const parentType = parent.$__reactPdfMakeType;

  const contentKey = getContentKey(parentType);

  if (contentKey === null) {
    return;
  }

  // Typical object content
  const currentChildren = getChildrenFromElement(parent);

  if (currentChildren === undefined) {
    // First append
    if (
      contentKey === "body" ||
      contentKey === "columns" ||
      contentKey === "stack"
    ) {
      // Always exist as array
      parent[contentKey] = [child];
      return;
    }

    // First item does not need to exist as array
    parent[contentKey] = child;
  } else if (!Array.isArray(currentChildren)) {
    // create array and append child
    parent[contentKey] = [currentChildren, child];
  } else {
    // reuse array and append child
    parent[contentKey] = [...currentChildren, child];
  }
};

const getContentKey = (
  key: PdfReconcilerIntrinsicType,
): VirtualContentKey | null => {
  if (key === "pdf-array") return null;

  const baseType = removePdfTypePrefix(key);

  if (baseType === "tbody") {
    return "body";
  }

  if (baseType === "toc") {
    return "title";
  }

  return baseType;
};

const isPdfReconcilerElement = (
  node: PdfReconcilerNode,
): node is PdfReconcilerElement =>
  typeof node === "object" && node !== null && !Array.isArray(node);

const getChildrenFromElement = (
  elem: PdfReconcilerElement,
): PdfReconcilerNode | undefined => {
  const type = elem.$__reactPdfMakeType;

  const contentKey = getContentKey(type);

  if (contentKey === null) return undefined;

  return elem[contentKey] as PdfReconcilerNode | undefined;
};

/**
 * Resolves virtual elements only used to pass extra props
 */
const getRealChild = (child: PdfReconcilerNode): PdfReconcilerNode => {
  if (isPdfReconcilerElement(child)) {
    const childType = child.$__reactPdfMakeType;

    if (
      childType === "pdf-cell" ||
      childType === "pdf-column" ||
      childType === "pdf-li"
    ) {
      const grandChild = getChildrenFromElement(child);
      if (grandChild === undefined || !isPdfReconcilerElement(grandChild)) {
        console.log(
          "This element requires a single PDF element as children. Received: ",
          grandChild,
        );
        return child;
      }

      const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        $__reactPdfMakeType: _,
        ...propagatedProps
      } = child;

      const childContentKey = getContentKey(child.$__reactPdfMakeType);

      if (childContentKey !== null) {
        delete propagatedProps[childContentKey];
      }

      return {
        ...propagatedProps,
        ...grandChild,
      };
    }
  }
  return child;
};
