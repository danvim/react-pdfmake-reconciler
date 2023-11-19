import { describe, expect, test } from "vitest";
import { PdfRenderer } from "../PdfRenderer.ts";

describe("PdfRenderer", () => {
  describe("PDF Make Content", () => {
    test("string", () => {
      expect(PdfRenderer.renderOnce("Hello World!")).resolves.toEqual([
        "Hello World!",
      ]);
    });

    test("number", () => {
      expect(PdfRenderer.renderOnce(1)).resolves.toEqual(["1"]);
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
        ),
      ).resolves.toEqual([
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
        ),
      ).resolves.toEqual([
        {
          $__reactPdfMakeType: "pdf-columns",
          columns: [
            "Hello World!",
            {
              $__reactPdfMakeType: "pdf-text",
              text: "Hello World!",
              width: "50%",
            },
          ],
        },
      ]);
    });

    test("stack", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-stack fillColor="#000000">
            Hello World!
            <pdf-text>Hello World!</pdf-text>
          </pdf-stack>,
        ),
      ).resolves.toEqual([
        {
          $__reactPdfMakeType: "pdf-stack",
          stack: [
            "Hello World!",
            {
              $__reactPdfMakeType: "pdf-text",
              text: "Hello World!",
            },
          ],
          fillColor: "#000000",
        },
      ]);
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
        ),
      ).resolves.toEqual([
        {
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
        },
      ]);
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
        ),
      ).resolves.toEqual([
        {
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
        },
      ]);
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
        ),
      ).resolves.toEqual([
        {
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
        },
      ]);
    });

    test("pageReference", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-pageReference>Hello World!</pdf-pageReference>,
        ),
      ).resolves.toEqual([
        {
          $__reactPdfMakeType: "pdf-pageReference",
          pageReference: "Hello World!",
        },
      ]);
    });

    test("textReference", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-textReference>Hello World!</pdf-textReference>,
        ),
      ).resolves.toEqual([
        {
          $__reactPdfMakeType: "pdf-textReference",
          textReference: "Hello World!",
        },
      ]);
    });

    test("toc", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-toc numberStyle="numberStyle">
            <pdf-text>Title</pdf-text>
          </pdf-toc>,
        ),
      ).resolves.toEqual([
        {
          $__reactPdfMakeType: "pdf-toc",
          title: {
            $__reactPdfMakeType: "pdf-text",
            text: "Title",
          },
          numberStyle: "numberStyle",
        },
      ]);
    });

    test("image", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-image image="https://example.com/logo.png" />,
        ),
      ).resolves.toEqual([
        {
          $__reactPdfMakeType: "pdf-image",
          image: "https://example.com/logo.png",
        },
      ]);
    });

    test("svg", () => {
      expect(
        PdfRenderer.renderOnce(<pdf-svg svg="<xml></xml>" />),
      ).resolves.toEqual([
        {
          $__reactPdfMakeType: "pdf-svg",
          svg: "<xml></xml>",
        },
      ]);
    });

    test("qr", () => {
      expect(
        PdfRenderer.renderOnce(<pdf-qr qr="Hello World!" />),
      ).resolves.toEqual([
        {
          $__reactPdfMakeType: "pdf-qr",
          qr: "Hello World!",
        },
      ]);
    });

    test("canvas", () => {
      expect(
        PdfRenderer.renderOnce(
          <pdf-canvas canvas={[{ type: "rect", x: 0, y: 0, w: 10, h: 10 }]} />,
        ),
      ).resolves.toEqual([
        {
          $__reactPdfMakeType: "pdf-canvas",
          canvas: [{ type: "rect", x: 0, y: 0, w: 10, h: 10 }],
        },
      ]);
    });

    test("array", () => {
      expect(
        PdfRenderer.renderOnce([<pdf-array key={1}>Hello World!</pdf-array>]),
      ).resolves.toEqual([["Hello World!"]]);
    });
  });
});
