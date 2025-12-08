+++
title = 'Accordion'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++


The accordion shortcode creates collapsible content sections that expand and collapse when clicked. It's perfect for FAQs, documentation sections, or any content that benefits from progressive disclosure.

## Usage

{{< codeblock lang="go" >}}
{{</* accordion caption="Optional Caption Text" */>}}
title: First Accordion Title
content: Your content here. **go** is supported!

<!--accordion-->

title: Second Accordion Title
content: More content here.
You can have multiple paragraphs.

- Bullet points work
- Lists are supported

<!--accordion-->

title: Third Accordion Title
content: Final section content.
{{</* /accordion */>}}
{{< /codeblock >}}

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Accordion Parameters" >}}
caption|No|-|Optional caption displayed below all accordion items
{{< /table >}}

## Content Structure

Each accordion item is separated by `<!--accordion-->` and must follow this format:

{{< table headers="Field|Required|Description" caption="Accordion Item Fields" >}}
title:|Yes|The clickable header text for the accordion item
content:|Yes|The collapsible content (supports rich content). 
{{< /table >}}

## Examples

### Basic Accordion

{{<accordion>}}
title: What is Hugo?
content: Hugo is a fast and flexible static site generator written in Go.

<!--accordion-->

title: Why use shortcodes?
content: Shortcodes allow you to create reusable components in your content without writing HTML.

<!--accordion-->

title: How do I install Hugo?
content: You can install Hugo using package managers like Homebrew, Chocolatey, or download binaries from the official website.
{{</accordion>}}


### Accordion with Caption

{{<accordion caption="Frequently Asked Questions">}}
title: How do I get started?
content: Simply create a new Hugo site and start adding content!

<!--accordion-->

title: Is Hugo free?
content: Yes! Hugo is completely free and open source.
{{</accordion>}}

### Accordion with Rich Content

{{< accordion>}}
title: Installation Steps
content: Follow these steps to install:

1. Download Hugo from the official site
2. Extract the archive
3. Add Hugo to your PATH
4. Verify installation with `hugo version`

<!--accordion-->
title: Configuration
content: Configure your site using `config.toml`:

Basic settings:
- `baseURL` - Your site's URL
- `title` - Your site's title
- `theme` - The theme name

<!--accordion-->
title: Troubleshooting
content: Common issues and solutions:

- **Problem**: Hugo not found
- **Solution**: Make sure Hugo is in your PATH

Check the [documentation](https://gohugo.io) for more help.
{{</accordion>}}


## Dark Mode Support

The accordion automatically adapts to dark mode using your theme's color variables:
