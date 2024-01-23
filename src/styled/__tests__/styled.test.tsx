import { describe, expect, test } from "vitest";
import { styled } from "../styled.tsx";
import { PdfRenderer } from "../../PdfRenderer.tsx";
import { ThemeProvider } from "../ThemeContext.ts";
import { FC } from "react";
import { StyleReference } from "pdfmake/interfaces";
import { PdfNode } from "../../types/PdfNode.ts";

describe("styled", () => {
  test("styled component can be created via styled API", () => {
    const C = styled("pdf-text")({
      color: "#f00",
    });

    expect(PdfRenderer.renderOnce(<C>Hello</C>).content).toEqual({
      $__reactPdfMakeType: "pdf-text",
      text: "Hello",
      style: {
        color: "#f00",
      },
    });
  });

  test("styled component can override previously set styles", () => {
    const C = styled("pdf-text")({
      color: "#f00",
    });

    const C2 = styled(C)({
      color: "#0f0",
    });

    expect(PdfRenderer.renderOnce(<C2>Hello</C2>).content).toEqual({
      $__reactPdfMakeType: "pdf-text",
      text: "Hello",
      style: [
        {
          color: "#f00",
        },
        {
          color: "#0f0",
        },
      ],
    });
  });

  test("inline style should override styled component styles", () => {
    const C = styled("pdf-text")({
      color: "#f00",
    });

    expect(
      PdfRenderer.renderOnce(<C style={{ color: "#0f0" }}>Hello</C>).content,
    ).toEqual({
      $__reactPdfMakeType: "pdf-text",
      text: "Hello",
      style: [
        {
          color: "#f00",
        },
        {
          color: "#0f0",
        },
      ],
    });
  });

  test("theme can be retrieved in styled function", () => {
    type MyTheme = { primary: string };

    const C = styled("pdf-text")((_, theme) => ({
      color: (theme as MyTheme).primary,
    }));

    expect(
      PdfRenderer.renderOnce(
        <ThemeProvider value={{ primary: "#00f" }}>
          <C>Hello</C>
        </ThemeProvider>,
      ).content,
    ).toEqual({
      $__reactPdfMakeType: "pdf-text",
      text: "Hello",
      style: {
        color: "#00f",
      },
    });
  });

  test("styled function can consume additional props", () => {
    const MyText: FC<{ style?: StyleReference; children?: PdfNode }> = ({
      style,
      children,
    }) => <pdf-text style={style}>{children}</pdf-text>;

    const C = styled(MyText)<{ myColor: string }>(({ myColor }) => ({
      color: myColor,
    }));

    expect(PdfRenderer.renderOnce(<C myColor="#00f">Hello</C>).content).toEqual(
      {
        $__reactPdfMakeType: "pdf-text",
        text: "Hello",
        style: {
          color: "#00f",
        },
      },
    );
  });
});
