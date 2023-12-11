import { describe, expect, test } from "vitest";
import { PdfRenderer } from "../PdfRenderer.tsx";
import { FC, Fragment, useEffect, useState } from "react";
import { PdfFooter, PdfHeader } from "../components";
import { DynamicPdfNode } from "../types/DynamicPdfNode.tsx";

describe("PdfRenderer", () => {
  describe("pdfmake Content", () => {
    test("string", () => {
      expect(PdfRenderer.renderOnce("Hello World!").content).toEqual(
        "Hello World!",
      );
    });

    test("number", () => {
      expect(PdfRenderer.renderOnce(1).content).toEqual("1");
    });

    test("text", () => {
      expect(
        PdfRenderer.renderOnce(
          <>
            <pdf-text bold={true}>Hello World!</pdf-text>
            <pdf-text link="https://google.com">Hello World!</pdf-text>
            <pdf-text id="1">Hello World!</pdf-text>
            <pdf-text tocItem="1">Hello World!</pdf-text>
          </>,
        ).content,
      ).toEqual([
        {
          $__reactPdfMakeType: "pdf-text",
          text: "Hello World!",
          bold: true,
        },
        {
          $__reactPdfMakeType: "pdf-text",
          text: "Hello World!",
          link: "https://google.com",
        },
        {
          $__reactPdfMakeType: "pdf-text",
          text: "Hello World!",
          id: "1",
        },
        {
          $__reactPdfMakeType: "pdf-text",
          text: "Hello World!",
          tocItem: "1",
        },
      ]);
    });

    test("columns", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-columns>
            Hello World!
            <pdf-column width="50%">
              <pdf-text>Hello World!</pdf-text>
            </pdf-column>
          </pdf-columns>,
        ).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-columns",
        columns: [
          "Hello World!",
          {
            $__reactPdfMakeType: "pdf-text",
            text: "Hello World!",
            width: "50%",
          },
        ],
      });
    });

    test("stack", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-stack fillColor="#000000">
            Hello World!
            <pdf-text>Hello World!</pdf-text>
          </pdf-stack>,
        ).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-stack",
        stack: [
          "Hello World!",
          {
            $__reactPdfMakeType: "pdf-text",
            text: "Hello World!",
          },
        ],
        fillColor: "#000000",
      });
    });

    test("ol", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-ol type="lower-alpha">
            Hello World!
            <pdf-li counter={10}>
              <pdf-text>Hello World!</pdf-text>
            </pdf-li>
          </pdf-ol>,
        ).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-ol",
        ol: [
          "Hello World!",
          {
            $__reactPdfMakeType: "pdf-text",
            text: "Hello World!",
            counter: 10,
          },
        ],
        type: "lower-alpha",
      });
    });

    test("ul", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-ul type="square">
            Hello World!
            <pdf-li listType="circle">
              <pdf-text>Hello World!</pdf-text>
            </pdf-li>
          </pdf-ul>,
        ).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-ul",
        ul: [
          "Hello World!",
          {
            $__reactPdfMakeType: "pdf-text",
            text: "Hello World!",
            listType: "circle",
          },
        ],
        type: "square",
      });
    });

    test("table", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-table layout="lightHorizontalLines">
            <pdf-tbody headerRows={1}>
              <pdf-array>
                Hello World!
                <pdf-cell rowSpan={1}>
                  <pdf-text>Hello World!</pdf-text>
                </pdf-cell>
              </pdf-array>
            </pdf-tbody>
          </pdf-table>,
        ).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-table",
        table: {
          $__reactPdfMakeType: "pdf-tbody",
          headerRows: 1,
          body: [
            [
              "Hello World!",
              {
                $__reactPdfMakeType: "pdf-text",
                text: "Hello World!",
                rowSpan: 1,
              },
            ],
          ],
        },
        layout: "lightHorizontalLines",
      });
    });

    test("pageReference", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-pageReference>Hello World!</pdf-pageReference>,
        ).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-pageReference",
        pageReference: "Hello World!",
      });
    });

    test("textReference", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-textReference>Hello World!</pdf-textReference>,
        ).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-textReference",
        textReference: "Hello World!",
      });
    });

    test("toc", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-toc numberStyle="numberStyle">
            <pdf-text>Title</pdf-text>
          </pdf-toc>,
        ).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-toc",
        title: {
          $__reactPdfMakeType: "pdf-text",
          text: "Title",
        },
        numberStyle: "numberStyle",
      });
    });

    test("image", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-image image="https://example.com/logo.png" />,
        ).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-image",
        image: "https://example.com/logo.png",
      });
    });

    test("svg", () => {
      expect(
        PdfRenderer.renderOnce(<pdf-svg svg="<xml></xml>" />).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-svg",
        svg: "<xml></xml>",
      });
    });

    test("qr", () => {
      expect(
        PdfRenderer.renderOnce(<pdf-qr qr="Hello World!" />).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-qr",
        qr: "Hello World!",
      });
    });

    test("canvas", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-canvas canvas={[{ type: "rect", x: 0, y: 0, w: 10, h: 10 }]} />,
        ).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-canvas",
        canvas: [{ type: "rect", x: 0, y: 0, w: 10, h: 10 }],
      });
    });

    test("array", () => {
      expect(
        PdfRenderer.renderOnce(<pdf-array>Hello World!</pdf-array>).content,
      ).toEqual(["Hello World!"]);
    });

    test("fragment", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-stack>
            {["Hello", <Fragment key={1}>World!</Fragment>]}
          </pdf-stack>,
        ).content,
      ).toEqual({
        $__reactPdfMakeType: "pdf-stack",
        stack: ["Hello", "World!"],
      });
    });
  });

  describe("renderOnce", () => {
    const Test: FC = () => {
      const [text, setText] = useState("");

      useEffect(() => {
        setText("Hello");
      }, []);

      return <>{text}</>;
    };

    test("flushes effects", () => {
      expect(PdfRenderer.renderOnce(<Test />).content).toEqual("Hello");
    });
  });

  describe("margin content", () => {
    test("static header content", () => {
      expect(
        PdfRenderer.renderOnce(<PdfHeader>Hello</PdfHeader>).header,
      ).toEqual("Hello");
    });

    test("static footer content", () => {
      expect(
        PdfRenderer.renderOnce(<PdfFooter>Hello</PdfFooter>).footer,
      ).toEqual("Hello");
    });

    test("dynamic header content", () => {
      const document = PdfRenderer.renderOnce(
        <PdfHeader>
          {(pageNumber, pageCount, pageSize) => (
            <pdf-text>
              {pageNumber}
              {pageCount}
              {pageSize.width}
            </pdf-text>
          )}
        </PdfHeader>,
      );
      expect(
        (document.header as DynamicPdfNode)(1, 2, {
          width: 3,
          height: 4,
          orientation: "portrait",
        }),
      ).toEqual({
        $__reactPdfMakeType: "pdf-text",
        text: ["1", "2", "3"],
      });
    });

    test("dynamic footer content", () => {
      const document = PdfRenderer.renderOnce(
        <PdfFooter>
          {(pageNumber, pageCount, pageSize) => (
            <pdf-text>
              {pageNumber}
              {pageCount}
              {pageSize.width}
            </pdf-text>
          )}
        </PdfFooter>,
      );
      expect(
        (document.footer as DynamicPdfNode)(1, 2, {
          width: 3,
          height: 4,
          orientation: "portrait",
        }),
      ).toEqual({
        $__reactPdfMakeType: "pdf-text",
        text: ["1", "2", "3"],
      });
    });
  });
});
