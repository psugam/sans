+++
title = "Table Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

The **table shortcode** allows you to create styled HTML tables within your Hugo content.  
It supports custom headers, optional captions, and automatic styling for light/dark modes.

## Usage

### Basic Table

{{< codeblock lang="go" >}}
{{</* table headers="Name|Age|City" caption="My Table" */>}}
John|25|New York
Jane|30|Los Angeles
Bob|28|Chicago
{{</* /table */>}}
{{< /codeblock >}}

### Table Without Caption

{{< codeblock lang="go" >}}
{{</* table headers="Product|Price|Stock" */>}}
Laptop|1200|10
Monitor|300|15
Keyboard|50|50
{{</* /table */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Table Shortcode Parameters" >}}
headers|No|-|Pipe-separated list of column headers (e.g., "Name।Age।City")  
caption|No|-|Optional caption displayed below the table  
Inner content|Yes|-|Rows of table data separated by newlines, cells separated by `।`  
{{< /table >}}

> **Note:** Using `id` generated from the caption can conflict if multiple tables share the same caption in a single page.  

---


## Examples

### Table With Mixed Content

{{< table headers="Name|Occupation|Country" caption="Team Members" >}}
Alice|Engineer|USA
Bob|Designer|Canada
Charlie|Manager|UK
{{< /table >}}

---

### Table With Empty Cells

{{< table headers="Item|Price|Stock" caption="Inventory" >}}
Laptop|1200|10
Monitor|* |15
Keyboard|50| * 
{{< /table >}}

---
