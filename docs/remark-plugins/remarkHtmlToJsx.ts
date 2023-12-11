import { SKIP, visit } from "unist-util-visit";
import { mdxFromMarkdown } from "mdast-util-mdx";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxjs } from "micromark-extension-mdxjs";

export default function remarkHtmlToJsx() {
  async function transform(...args) {
    // Async import since these packages are all in ESM

    // This is a horror show, but it's the only way I could get the raw HTML into MDX.
    const [ast] = args;
    visit(ast, "html", (node) => {
      const escapedHtml = JSON.stringify(node.value);
      const jsx = `<div dangerouslySetInnerHTML={{__html: ${escapedHtml} }}/>`;
      const rawHtmlNode = fromMarkdown(jsx, {
        extensions: [mdxjs()],
        mdastExtensions: [mdxFromMarkdown()],
      }).children[0];

      Object.assign(node, rawHtmlNode);

      return SKIP;
    });
  }

  return transform;
}
