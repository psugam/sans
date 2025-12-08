+++
title = "Highlight Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

The **highlight shortcode** is used to emphasize text in a visually distinct, centered style.  
It displays text in a larger font, with controlled width and spacing, making it ideal for quotes, headings, or important notices.

---

## Usage

{{< codeblock lang="go" >}}
    {{</* highlight */>}}
    This text will be highlighted in the center of the page with larger font size.
    {{</* /highlight */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Highlight Shortcode Parameters" >}}
Inner content|Yes|-|The text or Markdown content to be highlighted  
{{< /table >}}

> **Note:** The shortcode does not take extra parameters. Styling is controlled via CSS inside the shortcode.

---

## Examples

### Basic Highlight

{{<highlight>}}
Important announcement: All students must submit their assignments by Friday.
{{</highlight>}}

---

### Highlight with Markdown


{{<highlight>}}
**Note:** This is a critical update.  
*Please check your emails for details.*
{{</highlight >}}


---

### Multiple Highlights in a Page
{{<highlight>}}
First highlighted message
{{</highlight>}}

Some normal content in between.

{{<highlight>}}
Second highlighted message
{{</highlight>}}

---
