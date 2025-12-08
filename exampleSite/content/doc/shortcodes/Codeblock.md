+++
title = "Codeblock Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

The **codeblock shortcode** provides a fully styled code display with:

- Syntax highlighting  
- A language label  
- A “Copy” button  

It is used to show clean code examples in your blog.

---

## Usage

{{< codeblock lang="go" >}}
{{</* codeblock lang="javascript" */>}}
console.log("Hello World");
{{</* /codeblock */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Codeblock Parameters" >}}
lang|Yes|-|Programming language used for syntax highlighting  
Inner content|Yes|-|The code to be displayed inside the block  
{{< /table >}}

---

## Config

The Sans theme uses the monokai highlighter by default. You can change the code highlighter and other params in **hugo.toml**. 
{{<codeblock lang="toml">}}
  [markup.highlight]
    style = "monokai"
    lineNos = true
    lineNumbersInTable = true
{{</codeblock>}}

## Features

- Language label in the top bar  
- Copy-to-clipboard button  
- No extra spacing added  
- Supports all Hugo-highlight languages  

---

## Examples

### JavaScript Example

{{< codeblock lang="javascript" >}}
{{</* codeblock lang="javascript" */>}}
function hello() {
  console.log("Hello World");
}
hello();
{{</* /codeblock */>}}
{{< /codeblock >}}

---

### Python Example

{{< codeblock lang="python" >}}
{{</* codeblock lang="python" */>}}
def greet(name):
    return f"Hello, {name}"

print(greet("World"))
{{</* /codeblock */>}}
{{< /codeblock >}}

---

### HTML Example

{{< codeblock lang="html" >}}
{{</* codeblock lang="html" */>}}
<div class="card">
  <p>Hello!</p>
</div>
{{</* /codeblock */>}}
{{< /codeblock >}}

---

### Showing Another Shortcode Inside Codeblock

{{< codeblock lang="go" >}}
{{</* codeblock lang="go" */>}}
{{</* admonition type="info" */>}}
This is inside an admonition block.
{{</* /admonition */>}}
{{</* /codeblock */>}}
{{< /codeblock >}}

---
