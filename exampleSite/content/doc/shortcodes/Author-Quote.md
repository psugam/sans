+++
title = 'Author Quote'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

The author-quote shortcode creates automatically formatted blockquotes with attribution. It displays quotes with decorative quotation marks, optional author names, and source citations.

## Usage

{{< codeblock lang="go" >}}
{{</* author-quote author="Author Name" source="Source Title" */>}}
Your quote text here
{{</* /author-quote */>}}
{{< /codeblock >}}

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Author Quote Parameters" >}}
author|No|-|The name of the person being quoted
source|No|-|The source of the quote (book, article, speech, etc.)
Inner content|Yes|-|The quote text (supports Markdown)
{{< /table >}}

## Examples

### Basic Quote (No Attribution)

{{<author-quote>}}
To be or not to be, that is the question.
{{</author-quote>}}

### Quote with Author Only

{{<author-quote author="Albert Einstein">}}
Imagination is more important than knowledge.
{{</author-quote>}}

### Quote with Author and Source

{{<author-quote author="Maya Angelou" source="I Know Why the Caged Bird Sings">}}
There is no greater agony than bearing an untold story inside you.
{{</author-quote>}}

### Quote with Markdown Formatting

{{<author-quote author="Steve Jobs" source="Stanford Commencement Address">}}
Your time is **limited**, so don't waste it living *someone else's life*.
{{</author-quote>}}


### Multi-paragraph Quote

{{<author-quote author="Nelson Mandela" source="Long Walk to Freedom">}}
I learned that courage was not the absence of fear, but the triumph over it.

The brave man is not he who does not feel afraid, but he who conquers that fear.
{{</author-quote>}}




## Visual Structure

The quote is structured as follows:

{{< codeblock lang="go" >}}
┌─────────────────────────────────┐
│ "                               │ ← Opening quote mark
│   Quote text goes here with     │ ← Quote body (inline)
│   markdown support.         "   │ ← Closing quote mark
│                                 │
│ — Author Name, Source Title     │ ← Attribution line (optional)
└─────────────────────────────────┘
   ↑
   Red left border (2px)
{{< /codeblock >}}

## Example Combinations

### Blog Post Introduction

{{<author-quote author="Henry Ford">}}
Whether you think you can, or you think you can't – you're right.
{{</author-quote>}}

This quote perfectly captures the essence of today's topic...

### Academic Writing

{{<author-quote author="Carl Sagan" source="Cosmos">}}
The cosmos is within us. We are made of **star-stuff**. We are a way for the universe to know itself.
{{</author-quote>}}

### Product Testimonial


{{<author-quote author="Jane Doe" source="CEO, Tech Company">}}
This product transformed our workflow and increased productivity by 40%.
{{</author-quote>}}

## Customization Tips

To modify the accent color, change the border-left color in the CSS:

{{< codeblock lang="css" >}}
.custom-quote {
  border-left: 2px solid rgb(255, 0, 0); /* Red - change to your theme color */
}
{{< /codeblock >}}
