import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkTwoslash from "remark-shiki-twoslash";
import remarkHtmlToJsx from "./remark-plugins/remarkHtmlToJsx";
import { Options } from "docusaurus-plugin-react-docgen-typescript";

const config: Config = {
  title: "React pdfmake Reconciler",
  tagline: "Write pdfmake using React JSX",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://danvim.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/react-pdfmake-reconciler",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "danvim", // Usually your GitHub org/user name.
  projectName: "react-pdfmake-reconciler", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/danvim/react-pdfmake-reconciler/tree/master/docs/",
          remarkPlugins: [
            [
              remarkTwoslash,
              {
                themes: ["light-plus", "dark-plus"],
                defaultCompilerOptions: {
                  types: ["react-pdfmake-reconciler/react-jsx"],
                },
                includeJSDocInHover: true,
              } satisfies Parameters<typeof remarkTwoslash>[0],
            ],
            remarkHtmlToJsx,
          ],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/danvim/react-pdfmake-reconciler/tree/master/docs/",
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
        gtag: {
          trackingID: "G-PT3YW6YPSN",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.png",
    navbar: {
      title: "React pdfmake Reconciler",
      logo: {
        alt: "React pdfmake Reconciler logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/danvim/react-pdfmake-reconciler",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/danvim/react-pdfmake-reconciler",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "docusaurus-plugin-react-docgen-typescript",
      {
        // pass in a single string or an array of strings
        global: false,
        globOptions: null,
        src: ["../src/**/*.tsx"],
        parserOptions: {
          skipChildrenPropWithoutDoc: false,
        },
      } satisfies Options,
    ],
    "docusaurus-plugin-sass",
    "docusaurus-lunr-search",
  ],
};

export default config;
