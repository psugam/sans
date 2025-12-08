+++
title = "Collapse Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

The collapse shortcode allows you to create expandable/collapsible sections in your content without JavaScript.  

## Usage

{{< codeblock lang="go" >}}
{{</* collapse title="Click to expand" open="false" */>}}
This content will be hidden initially and displayed when the summary is clicked.
{{</* /collapse */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Collapse Shortcode Parameters" >}}
title|No|Click to expand|Text displayed on the clickable summary  
open|No|false|Whether the collapse section is open by default (`true` or `false`)  
Inner content|Yes|-|The content inside the collapse block, supports Markdown  
{{< /table >}}

---

## Examples

### Basic Collapse (Closed by Default)

{{<collapse title="Click to expand">}}
This content is hidden until you click the summary.
{{</collapse>}}

---

### Collapse Open by Default

{{<collapse title="Read me" open="true">}}
This content is visible by default.
{{</collapse>}}


---

### Using Markdown Inside Collapse

{{<collapse title="Markdown Example">}}
- Item 1  
- Item 2  
- **Bold text** and *italic text*  
```python
print("Hello inside collapse")
```
{{</collapse>}}

---