+++
title = "Tabs Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

The **tabs shortcode** allows you to create tabbed content sections in your Hugo posts or pages.  
It supports multiple tabs with titles and content, automatically handling tab switching.

---

## Usage

### Basic Tabs

{{< codeblock lang="go" >}}
{{</* tabs */>}}
title: Tab 1
content: Content for the first tab.

<!--tab-->
title: Tab 2
content: Content for the second tab.

<!--tab-->
title: Tab 3
content: Content for the third tab.
{{</* /tabs */>}}
{{< /codeblock >}}

### Tabs With Markdown Inside

{{< codeblock lang="go" >}}
{{</* tabs */>}}
title: Introduction
content: |
  This tab contains **Markdown** content.  
  You can use lists:
  - Item 1
  - Item 2
  - Item 3

<!--tab-->
title: Details
content: |
  More detailed content can go here.  
  Include links: [Hugo](https://gohugo.io)

<!--tab-->
title: Summary
content: Summary text for this section.
{{</* /tabs */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Tabs Shortcode Parameters" >}}
title|Yes|-|Title of the tab, displayed on the tab button  
content|Yes|-|Content inside the tab (supports Markdown)  
Inner content|Yes|-|All tabs separated by `<!--tab-->` comments  
{{< /table >}}

> **Note:** The first tab is active by default.

---

## Examples

### Simple Tab Example

{{< tabs >}}
title: Features
content: Our product has several amazing features.

<!--tab-->
title: Pricing
content: Choose a plan that fits your needs.

<!--tab-->
title: FAQ
content: Frequently asked questions.
{{< /tabs >}}


### Tab With Lists and Links

{{<tabs>}}
title: Overview
content: 
  - Fully responsive
  - Easy to use
  - Customizable

<!--tab-->
title: Resources
content: 
  Useful links:
  - [Documentation](https://gohugo.io)
  - [GitHub](https://github.com)
{{</tabs>}}


---
