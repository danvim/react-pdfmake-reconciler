import { StyleReference } from "pdfmake/interfaces";
import { ComponentProps, ComponentType } from "react";
import { PdfElements } from "../types/PdfElements.ts";

export interface DefaultTheme {}

export interface StyledFunction {
  // Intrinsic
  <T extends keyof PdfElements>(tag: T): Tagged<ComponentProps<T>>;

  // Component
  <PP>(tag: ComponentType<PP>): Tagged<PP>;
}

export type StylesGenerator<P> = (
  props: P,
  theme: DefaultTheme,
) => StyleReference;

type Tagged<P> = <PP>(
  style: StyleReference | StylesGenerator<P & PP>,
) => ComponentType<P & PP>;
