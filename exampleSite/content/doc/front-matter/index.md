+++
date = '2025-10-30T17:48:48+05:45'
draft = false
title = 'Front Matter'
tags = ['installation','documentation']
authors = ['John']
categories=['category-1', 'category-2']
showFrontMatter=false
toc=true
[build]
  list="never"
+++


This document outlines all available frontmatter parameters for the Sans Hugo theme.

## Basic Parameters

### Title and Date

{{<codeblock lang="yaml">}}

---
title: "Your Post Title"
date: 2024-01-15T10:30:00-07:00
---
{{</codeblock>}}

- **`title`**: The title of your post or page (required)
- **`date`**: Publication date in ISO 8601 format (required for posts)

### Page Type

{{<codeblock lang="yaml">}}
type: "page"  # or "post"
{{</codeblock>}}

- **`type: "page"`**: Renders as a simple page without metadata (date, tags, reading time, etc.) or with the previous/next post at the end. 
- **`type: "post"`** or no type: Renders as a full blog post with all metadata

## Cover Image Configuration

Configure cover images for your posts using the `cover` parameter:

{{<codeblock lang="yaml">}}
cover:
  image: "cover.jpg"
  alt: "Alternative text description"
  caption: "Photo by John Doe"
  imageDisplay: true
  captionDisplay: true
{{</codeblock>}}

### Example Usage

**Full cover with caption:**

{{<codeblock lang="yaml">}}
cover:
  image: "featured.jpg"
  alt: "Mountain landscape at sunset"
  caption: "Photo taken at Rocky Mountain National Park"
{{</codeblock>}}

**Hide cover image:**
{{<codeblock lang="yaml">}}
cover:
  image: "cover.jpg"
  imageDisplay: false
{{</codeblock>}}

**Show image without caption:**
{{<codeblock lang="yaml">}}
cover:
  image: "cover.jpg"
  caption: "This caption won't be displayed"
  captionDisplay: false
{{</codeblock>}}

## Metadata Display Control

### Show/Hide All Metadata

{{<codeblock lang="yaml">}}
showFrontMatter: true
{{</codeblock>}}

- **`showFrontMatter: true`**: Display all metadata (tags, categories, date, word count, reading time)
- **`showFrontMatter: false`**: Hide all metadata for this post

**Note:** This parameter overrides individual metadata settings below. If not specified, it defaults to the site-wide configuration in `config.toml`.

## Taxonomies

Add taxonomical information to organize your content:

{{<codeblock lang="yaml">}}
tags: ["hugo", "web-development", "tutorial"]
categories: ["Technology", "Programming"]
authors: ["John Doe"]
{{</codeblock>}}

- **`tags`**: List of tags for the post
- **`categories`**: List of categories for the post
- **`authors`**: List of authors for the post

## Table of Contents

{{<codeblock lang="yaml">}}
toc: true
{{</codeblock>}}

- **`toc: true`**: Enable table of contents for this post
- **`toc: false`** or omit: No table of contents displayed

The table of contents is automatically generated from your heading structure.

## Site-Wide Settings

The following parameters are typically configured in your `config.toml` file but can be overridden per post if needed:

### Metadata Display

{{<codeblock lang="yaml">}}
showTags: true
showCategories: true
showAuthors: true
showDate: true
showWordCount: true
showReadingTime: true
{{</codeblock>}}

### Taxonomy Clouds

{{<codeblock lang="yaml">}}
showTagCloud: true
showCategoryCloud: true
showAuthorCloud: true
{{</codeblock>}}

These control the sidebar taxonomy clouds that appear on desktop views.

## Complete Example

Here's a full example with all available frontmatter options:

{{<codeblock lang="yaml">}}
---
title: "Building Modern Websites with Hugo"
date: 2024-11-27T14:30:00-07:00
tags: ["hugo", "static-site-generator", "web-development"]
categories: ["Technology", "Tutorials"]
authors: ["Jane Smith"]

# Cover image configuration
cover:
  image: "hugo-website.jpg"
  alt: "Hugo logo with website mockups"
  caption: "Hugo makes building websites fast and fun"
  imageDisplay: true
  captionDisplay: true

# Display options
showFrontMatter: true
toc: true

# Page type (use "page" for documentation, "post" for blog posts)
type: "post"
---

Your content starts here...
{{</codeblock>}}

## Quick Reference

### Minimal Post

{{<codeblock lang="yaml">}}
---
title: "My Post"
date: 2024-11-27
---
{{</codeblock>}}

### Simple Page (No Metadata)

{{<codeblock lang="yaml">}}
---
title: "About"
type: "page"
---
{{</codeblock>}}

### Blog Post with Cover

{{<codeblock lang="yaml">}}
---
title: "My Article"
date: 2024-11-27
tags: ["blogging"]
cover:
  image: "cover.jpg"
  caption: "A beautiful cover image"
toc: true
---
{{</codeblock>}}

## Important Notes

1. **Page Bundles**: Cover images must be placed in the same directory as your markdown file (page bundle structure)
2. **Type Behavior**: Setting `type: "page"` completely bypasses metadata display, regardless of other settings
3. **Default Values**: Most boolean parameters default to `true` or follow site-wide configuration
4. **Taxonomy Clouds**: Displayed only on desktop views (hidden on screens < 1300px)
5. **Reading Time**: Automatically calculated based on word count and site-configured reading speed