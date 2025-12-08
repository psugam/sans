+++
title = 'Button'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

The **button** shortcode creates a customizable clickable button using theme colors.  
It adapts automatically to both **light mode** and **dark mode**, using dynamically injected CSS variables from your theme parameters.

It supports custom links, target attributes, and inner content (text, icons, emojis, etc.).

---

## Usage

{{< codeblock lang="go" >}}
{{</* button href="/contact" target="_blank" */>}}
Contact Me
{{</* /button */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Button Shortcode Parameters" >}}
href|No|#|URL the button links to  
target|No|_self|Where the link opens (`_blank`, `_self`, etc.)  
Inner content|Yes|-|Button label (supports text, emojis, inline HTML)  
{{< /table >}}

---

## Examples

### 1. Basic Button

{{< button href="/services" >}}
View Services
{{< /button >}}

### 2. Open in New Tab

{{< button href="https://example.com" target="_blank" >}}
Visit Website 🌐
{{< /button >}}

### 3. Emoji Button

{{< button href="/login" >}}
🔐 Login
{{< /button >}}

### 4. Inside Paragraph

You can also embed the button inside text:

{{< button href="/signup" >}}Sign Up{{< /button >}}  
to join our community today!


---
