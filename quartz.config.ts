import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Dev notes",
    pageTitleSuffix: " | Silvia's dev notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "devnotes",
    },
    locale: "en-US",
    baseUrl: "notes.silvia.codes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Montserrat",
        body: "Nunito",
        code: "Cascadia Code",
      },
      colors: {
        lightMode: {
          light: "#fdf8f7",
          lightgray: "#e7bfdd",
          gray: "#b8a0d0",
          darkgray: "#565656",
          dark: "#2f2f2f",
          secondary: "#8e6fb8",
          tertiary: "#f7b2e8",
          highlight: "rgba(243, 217, 242, 0.4)",
          textHighlight: "#f7b2e844",
        },
        darkMode: {
          light: "#1a1a1a",
          lightgray: "#3a2a4a",
          gray: "#a0a0a0",
          darkgray: "#e0e0e0",
          dark: "#e0e0e0",
          secondary: "#b8a0d8",
          tertiary: "#d8c0e8",
          highlight: "rgba(74, 58, 90, 0.5)",
          textHighlight: "#b8a0d844",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
