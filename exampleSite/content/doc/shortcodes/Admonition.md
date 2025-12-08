+++
title = 'Admonition'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

The admonition shortcode creates visually distinct callout boxes to highlight important information in your content. It supports five different types, each with its own styling and icon.

## Usage

{{< codeblock lang="go" >}}
{{</* admonition type="note" title="Custom Title" */>}}
Your content here. go is supported!
{{</* /admonition */>}}
{{< /codeblock >}}

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Admonition Parameters" >}}
type|No|"note"|The admonition type: note, tip, info, warning, or danger
title|No|Capitalized type name|Custom title for the admonition box
{{< /table >}}

## Available Types

### Note (💡)
Use for general information or helpful notes.

{{< codeblock lang="go" >}}
{{</* admonition type="note" */>}}
This is a note admonition with default styling.
{{</* /admonition */>}}
{{< /codeblock >}}

**Colors:** Blue border (`#2196f3`), light blue background (`#e3f2fd`)

---

### Tip (✅)
Use for helpful tips or best practices.

{{< codeblock lang="go" >}}
{{</* admonition type="tip" title="Pro Tip" */>}}
Here's a useful tip to improve your workflow!
{{</* /admonition */>}}
{{< /codeblock >}}

**Colors:** Green border (`#4caf50`), light green background (`#e8f5e9`)

---

### Info (ℹ️)
Use for informational content.

{{< codeblock lang="go" >}}
{{</* admonition type="info" */>}}
Additional information that might be useful.
{{</* /admonition */>}}
{{< /codeblock >}}

**Colors:** Cyan border (`#00acc1`), light cyan background (`#e0f7fa`)

---

### Warning (⚠️)
Use for warnings or cautionary information.

{{< codeblock lang="go" >}}
{{</* admonition type="warning" title="Be Careful!" */>}}
This action might have unintended consequences.
{{</* /admonition */>}}
{{< /codeblock >}}

**Colors:** Orange border (`#ff9800`), light orange background (`#fff3e0`)

---

### Danger (❌)
Use for critical warnings or errors.

{{< codeblock lang="go" >}}
{{</* admonition type="danger" title="Critical" */>}}
This is a dangerous operation that could cause data loss.
{{</* /admonition */>}}
{{< /codeblock >}}

**Colors:** Red border (`#f44336`), light red background (`#ffebee`)

---

## Examples

### Basic Note


{{<admonition>}}
This uses all default values - type "note" and title "Note".
{{</admonition>}}

### Custom Title

{{<admonition type="warning" title="Important Update">}}
The API endpoint has changed. Please update your code.
{{</admonition>}}


### With go Content


{{<admonition type="tip">}}
You can use **bold**, *italic*, and even `code` inside admonitions.

- Bullet points work too
- Multiple paragraphs are supported
{{</admonition>}}
