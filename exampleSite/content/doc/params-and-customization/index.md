+++
title = 'Parameters and Customization'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

This comprehensive guide covers all configurable parameters for customizing your site's appearance, behavior, and content display options.

---

## Theme Features

The Sans theme provides optional features that can be enabled or disabled according to your requirements. Configure these settings in `hugo.toml`:

{{<codeblock lang="toml">}}
[theme]
  showDarkModeToggle = true
  showSearchIcon = true
  showGoToTop = true
{{</codeblock>}}

{{< table headers="Parameter|Default|Description" caption="Theme Feature Toggles" >}}
showDarkModeToggle|true|Displays toggle button for switching between light and dark themes
showSearchIcon|true|Shows search functionality icon in navigation
showGoToTop|true|Displays scroll-to-top button for improved navigation
{{< /table >}}

**Note**: Search functionality configuration is covered in detail in the [Search Documentation](/doc/search).

---

## Typography Configuration

### Site-Wide Font Settings

Customize the typography for your entire site by specifying font families in `hugo.toml`:

{{<codeblock lang="toml">}}
[fonts]
  siteFont = 'sans-serif, Monotype Corsiva'
{{</codeblock>}}

{{< table headers="Parameter|Format|Example" caption="Font Configuration" >}}
siteFont|Comma-separated font names|'Roboto, Arial, sans-serif'
{{< /table >}}

**Font Stack Guidelines**:
- List fonts in order of preference
- Include web-safe fallback fonts
- Separate multiple fonts with commas
- Enclose font names with spaces in quotes

---

## Table of Contents

### Configuration Overview

The table of contents (TOC) provides document navigation and can be customized through several parameters in `hugo.toml`:

{{<codeblock lang="toml">}}
[toc]
  numberingInTOC = false
  numberingInPost = true

[markup]
  [markup.tableOfContents]
    endLevel = 5
    ordered = false
    startLevel = 2
{{</codeblock>}}

### TOC Parameters

{{<table headers="Parameter|Type|Description" caption="Table of Contents Configuration" >}}
numberingInTOC|boolean|Enables hierarchical numbering in TOC (e.g., 1, 1.1, 1.1.1)
numberingInPost|boolean|Applies same numbering directly to headings in post content
startLevel|integer|Minimum heading level to include (2 = h2/##)
endLevel|integer|Maximum heading level to include (5 = h5/#####)
ordered|boolean|Enables restarted numbering at each level
{{</table>}}

### Hierarchical Numbering Example

When `numberingInTOC = true`, the TOC displays with continuous hierarchical numbering:

{{<codeblock lang="text">}}
Contents ▼

1. MANY COLUMNS
├── 1.1. FOOTNOTES
│   ├── 1.1.1. Abcd
│   │   └── 1.1.1.1. foot
│   └── 1.1.2. FOOTnotes 2
└── 1.2. HELLLO
    └── 1.2.1. Main Footnotes
{{</codeblock>}}

### Ordered Numbering Example

When `ordered = true` in markup settings, numbering restarts at each level:

{{<codeblock lang="text">}}
Contents ▼

1. MANY COLUMNS
├── 2. FOOTNOTES
│   ├── 1. Abcd
│   │   └── 1. foot
│   └── 2. FOOTnotes 2
└── 3. HELLLO
    └── 1. Main Footnotes
{{</codeblock>}}

### Enabling TOC in Posts

By default, the table of contents is disabled for individual posts. To enable it, add the following to the post's front matter:

{{<codeblock lang="yaml">}}
toc = true
{{</codeblock>}}

### Important Considerations

**Parameter Conflict**: The `numberingInTOC` and `ordered` parameters serve different numbering systems and should not both be enabled simultaneously. Choose one approach:
- Use `numberingInTOC = true` for continuous hierarchical numbering
- Use `ordered = true` for restarted numbering at each level

---

## Post Display Configuration

Control the metadata and information displayed with each post through the `[posts]` section:

{{<codeblock lang="toml">}}
[posts]
  readingSpeed = 212
  showDate = true
  showWordCount = true
  showAuthors = true
  showTags = true
  showCategories = true
  showReadingTime = true
  dateFormat = "2 Jan 2006"
  showTagCloud = false
  showCategoryCloud = false
  showAuthorCloud = false
{{</codeblock>}}

### Post Parameters Reference

{{<table headers="Parameter|Type|Description" caption="Post Display Parameters" >}}
readingSpeed|integer|Words per minute for reading time calculation (default: 212)
showDate|boolean|Displays publication date
showWordCount|boolean|Shows total word count
showAuthors|boolean|Displays author attribution
showTags|boolean|Shows associated tags
showCategories|boolean|Displays post categories
showReadingTime|boolean|Shows estimated reading duration
dateFormat|string|Date formatting specification (Go time format)
showTagCloud|boolean|Displays tag cloud in sidebar (large screens only)
showCategoryCloud|boolean|Shows category cloud in sidebar (large screens only)
showAuthorCloud|boolean|Displays author cloud in sidebar (large screens only)
{{</table>}}

### Reading Speed Calibration

The `readingSpeed` parameter determines reading time estimation:
- **Default value**: 212 words per minute (average adult reading speed)
- **Adjust based on content**: Technical content may require lower values (150-180)
- **Language considerations**: Non-English content may have different optimal values

### Taxonomy Clouds

Taxonomy clouds (tags, categories, authors) appear in the sidebar on large screens, providing quick navigation to related content. These are automatically hidden on smaller viewports for optimal mobile experience.

---

## Section List Configuration

Configure how content is displayed on list pages (archives, category pages, etc.):

{{<codeblock lang="toml">}}
[sections]
  showDate = true
  showTags = false
  showCategories = false
  showAuthors = false
  showCoverImage = false
  showSummary = true
  showReadMore = false
  summaryLength = 500
  dateFormat = "2006-01-02"
{{</codeblock>}}

### Section Parameters Reference

{{<table headers="Parameter|Type|Description" caption="Section List Display Parameters" >}}
showDate|boolean|Displays publication date for each post
showTags|boolean|Shows tags for each post in list
showCategories|boolean|Displays categories for each post
showAuthors|boolean|Shows author attribution
showCoverImage|boolean|Displays post cover images in list view
showSummary|boolean|Shows post summary/excerpt
showReadMore|boolean|Displays "Read More" link
summaryLength|integer|Maximum character count for summaries (not word count)
dateFormat|string|Date formatting for list pages
{{</table>}}

**Important**: The `summaryLength` value specifies character count, not word count. Adjust accordingly for desired summary length.

---

## About Page Configuration

Control social media link visibility on the About page:

{{<codeblock lang="toml">}}
[about]
  showSocialLinksPage = true
{{</codeblock>}}

{{< table headers="Parameter|Default|Description" caption="About Page Settings" >}}
showSocialLinksPage|true|Controls display of social media links on About page
{{< /table >}}

Social media links are configured in the `[social]` section as described in the [Homepage Configuration](/doc/homepage) guide.

---

## RSS Feed Configuration

Enable or disable RSS feed functionality and its associated icon:

{{<codeblock lang="toml">}}
[rss]
  showRSS = false
{{</codeblock>}}

{{< table headers="Parameter|Default|Description" caption="RSS Configuration" >}}
showRSS|false|Displays RSS icon in footer linking to site's XML feed
{{< /table >}}

When enabled, an RSS icon appears in the footer, providing users access to your site's RSS feed for content syndication.

---

## Code Highlighting

Configure syntax highlighting for code blocks with extensive customization options:

{{<codeblock lang="toml">}}
[markup]
  [markup.highlight]
    style = "monokai"
    lineNos = true
    lineNumbersInTable = true
{{</codeblock>}}

### Syntax Highlighting Parameters

{{< table headers="Parameter|Options|Description" caption="Code Highlighting Configuration" >}}
style|Various themes|Color scheme for syntax highlighting (e.g., monokai, dracula, github)
lineNos|boolean|Enables line numbers for code blocks
lineNumbersInTable|boolean|Renders line numbers using HTML tables for better copying
{{</table>}}

### Available Highlight Styles

{{< table headers="Style Name|Appearance|Best For" caption="Popular Syntax Highlighting Themes" >}}
monokai|Dark with vibrant colors|Dark mode sites
dracula|Purple and pink tones|Dark mode, modern aesthetic
github|Light with subtle colors|Light mode, documentation
solarized-dark|Muted dark palette|Reduced eye strain
nord|Cool blue tones|Dark mode, minimalist
{{< /table >}}

### Mathematical Expression Support

The configuration also enables passthrough for mathematical expressions:

{{<codeblock lang="toml">}}
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
{{</codeblock>}}

This allows LaTeX-style mathematical notation in your content using delimiters like `$$...$$` for block equations and `\(...\)` for inline expressions.

---

## Pagination Settings

Control content pagination for list pages and blog-style homepages:

{{<codeblock lang="toml">}}
[pagination]
  disableAliases = false
  pagerSize = 4
  path = 'page'
{{</codeblock>}}

### Pagination Parameters

{{< table headers="Parameter|Type|Description" caption="Pagination Configuration" >}}
disableAliases|boolean|Controls creation of pagination aliases
pagerSize|integer|Number of posts displayed per page (minimum: 1)
path|string|URL segment for pagination (e.g., /page/2/, /page/3/)
{{< /table >}}
