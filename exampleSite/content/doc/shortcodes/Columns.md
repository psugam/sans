+++
title = "Columns Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

The **columns shortcode** allows you to create multi-column layouts in your content.  
It splits content into multiple columns using the HTML/CSS flexbox layout.

---

## Usage

Separate columns using `<!--col-->` inside the shortcode:

{{< codeblock lang="go" >}}
{{</* columns */>}}
This is the content of the first column.
<!--col-->
This is the content of the second column.
<!--col-->
This is the content of the third column.
{{</* /columns */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Columns Shortcode Parameters" >}}
Inner content|Yes|-|Content to be split into columns. Use `<!--col-->` as a column separator.  
{{< /table >}}

> **Note:** Each `<!--col-->` creates a new column. There is no explicit `title` or `class` parameter for individual columns.

---

## Examples

### Two Columns

{{<columns>}}
Column 1 content  

  - Item A  
  - Item B
<!--col-->
*Column 2 content*  

  1. Step 1  
  2. Step 2
{{</columns>}}
---

### Three Columns with Markdown

{{<columns>}}
# Column 1
Content for first column.
<!--col-->
## Column 2
Content for second column with **bold** text.
<!--col-->
### Column 3
Content for third column with a list:
- Apple
- Banana
- Cherry
{{</columns>}}

> **Note:** Footnotes inside columns may not work correctly due to Markdown processing limitations.
---

## Accessibility & Responsiveness

- Columns use **flexbox**, so they shrink and wrap naturally on smaller screens  
- Content inside each column is **fully readable** and keyboard navigable  
- Works with screen readers as normal block content  

---