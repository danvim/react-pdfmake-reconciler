import { DefaultTheme, StyledFunction, StylesGenerator } from "./types.ts";
import { ElementType, FC } from "react";
import { Style, StyleReference } from "pdfmake/interfaces";
import { useTheme } from "./ThemeContext.ts";

export const styled = ((Base: ElementType) =>
  (style: StyleReference | StylesGenerator<unknown>) => {
    const Styled: FC = (p) => {
      const theme = useTheme();
      return <Base {...p} style={applyStyles(p, style, theme)} />;
    };

    return Styled;
  }) as StyledFunction;

const applyStyles = (
  p: object,
  style: StyleReference | StylesGenerator<unknown>,
  theme: DefaultTheme,
): StyleReference => {
  const styles: Array<string | Style> = [];

  const currentStyle: StyleReference =
    typeof style === "function" ? style(p, theme) : style;
  if (Array.isArray(currentStyle)) {
    styles.push(...currentStyle);
  } else {
    styles.push(currentStyle);
  }

  const inheritedStyle = (p as Record<string, unknown>).style as
    | StyleReference
    | undefined;
  if (Array.isArray(inheritedStyle)) {
    styles.push(...inheritedStyle);
  } else if (inheritedStyle) {
    styles.push(inheritedStyle);
  }

  if (styles.length === 1) return styles[0];

  return styles;
};
