+++
title = 'Menu Configuration'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

The Sans theme features a customizable main navigation menu that provides site-wide navigation. This guide covers all aspects of menu configuration and customization.

---

## Menu System Overview

The theme implements a single main navigation menu that appears consistently across all pages. Menu configuration is managed through the `config/menus.toml` file, providing centralized control over navigation structure.

---

## Basic Configuration

### Configuration File Location

Menu settings are stored in:
```
your-hugo-site/config/menus.toml
```

### Menu Entry Structure

Each menu item follows this basic structure:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Display Name'
  pageRef = '/path'
  weight = 10
{{</codeblock>}}

### Core Parameters

{{< table headers="Parameter|Type|Required|Description" caption="Menu Entry Parameters" >}}
name|string|Yes|Display text shown in navigation
pageRef|string|No*|Internal page reference (Hugo pages)
url|string|No*|Direct URL (files, external links)
weight|integer|Yes|Display order (lower values appear first)
params|object|No|Additional parameters (e.g., target attribute)
{{< /table >}}

**Note**: Either `pageRef` or `url` must be specified, but not both.

---

## Menu Item Types

### 1. Homepage Link

Link to the site's root page:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Home'
  pageRef = '/'
  weight = 10
{{</codeblock>}}

### 2. Taxonomy Pages

Link to automatically generated taxonomy list pages:

{{<codeblock lang="toml">}}
# Posts list page
[[main]]
  name = 'Posts'
  pageRef = '/posts'
  weight = 20

# Tags taxonomy
[[main]]
  name = 'Tags'
  pageRef = '/tags'
  weight = 30

# Categories taxonomy
[[main]]
  name = 'Categories'
  pageRef = '/categories'
  weight = 40
{{</codeblock>}}

### 3. Individual Pages

Link to specific content pages:

{{<codeblock lang="toml">}}
[[main]]
  name = 'About'
  pageRef = '/pages/about/'
  weight = 50

[[main]]
  name = 'Contact'
  pageRef = '/pages/contact/'
  weight = 55
{{</codeblock>}}

**Path Structure**: The `pageRef` should match your content directory structure:
- Content file: `content/pages/about.md`
- Menu reference: `pageRef = '/pages/about/'`

### 4. Direct File Links

Link directly to files (PDFs, images, downloads):

{{<codeblock lang="toml">}}
[[main]]
  name = 'Resume'
  url = '/files/resume.pdf'
  weight = 60
  params = {target = "_blank"}

[[main]]
  name = 'Portfolio'
  url = '/images/portfolio.jpg'
  weight = 65
  params = {target = "_blank"}
{{</codeblock>}}

**File Location**: Place files in the `static` directory:
- File path: `static/files/resume.pdf`
- Menu URL: `url = '/files/resume.pdf'`

### 5. External Links

Link to external websites or resources:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Documentation'
  url = 'https://docs.example.com'
  weight = 70
  params = {target = "_blank"}

[[main]]
  name = 'GitHub'
  url = 'https://github.com/username/repo'
  weight = 75
  params = {target = "_blank", rel = "noopener noreferrer"}
{{</codeblock>}}

### 6. Section Links

Link to content sections or subdirectories:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Documentation'
  pageRef = '/docs/'
  weight = 80

[[main]]
  name = 'Tutorials'
  pageRef = '/tutorials/'
  weight = 85
{{</codeblock>}}

---

## Weight-Based Ordering

### Understanding Weight

The `weight` parameter determines menu item display order using ascending numeric values.

{{< table headers="Weight Value|Position|Best Practice" caption="Weight Ordering System" >}}
Lower numbers|Appear first (left)|Homepage, main sections
10, 20, 30...|Standard increment|Allows easy insertion of new items
Higher numbers|Appear last (right)|Secondary links, external resources
{{< /table >}}

### Weight Examples

{{<codeblock lang="toml">}}
[[main]]
  name = 'Home'
  pageRef = '/'
  weight = 10        # First position

[[main]]
  name = 'Blog'
  pageRef = '/posts'
  weight = 20        # Second position

[[main]]
  name = 'About'
  pageRef = '/about'
  weight = 30        # Third position

[[main]]
  name = 'Contact'
  pageRef = '/contact'
  weight = 40        # Fourth position
{{</codeblock>}}

**Result**: Menu renders as: Home | Blog | About | Contact
Using increments of 10 allows easy insertion:

---

## Advanced Parameters

### Opening Links in New Tabs

Use the `params` object to add HTML attributes:

{{<codeblock lang="toml">}}
[[main]]
  name = 'External Site'
  url = 'https://example.com'
  weight = 50
  params = {target = "_blank"}
{{</codeblock>}}

### Security Attributes for External Links

For external links, add security attributes:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Partner Site'
  url = 'https://partner.com'
  weight = 60
  params = {target = "_blank", rel = "noopener noreferrer"}
{{</codeblock>}}

### Custom CSS Classes

Add custom styling classes to menu items:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Premium'
  pageRef = '/premium'
  weight = 70
  params = {class = "premium-link"}
{{</codeblock>}}

---

## Complete Configuration Example

### Full Menu Configuration

{{<codeblock lang="toml">}}
# config/menus.toml

# Homepage
[[main]]
  name = 'Home'
  pageRef = '/'
  weight = 10

# Content sections
[[main]]
  name = 'Blog'
  pageRef = '/posts'
  weight = 20

[[main]]
  name = 'Projects'
  pageRef = '/projects'
  weight = 30

# Taxonomy pages
[[main]]
  name = 'Tags'
  pageRef = '/tags'
  weight = 40

[[main]]
  name = 'Categories'
  pageRef = '/categories'
  weight = 50

# Static pages
[[main]]
  name = 'About'
  pageRef = '/pages/about/'
  weight = 60

[[main]]
  name = 'Contact'
  pageRef = '/pages/contact/'
  weight = 70

# External resources
[[main]]
  name = 'Documentation'
  url = '/docs/'
  weight = 80

[[main]]
  name = 'GitHub'
  url = 'https://github.com/username/repo'
  weight = 90
  params = {target = "_blank", rel = "noopener noreferrer"}

# Downloadable files

[[main]]
  name = 'Resume'
  url = '/files/resume.pdf'
  weight = 100
  params = {target = "_blank"}
{{</codeblock>}}

---

## Responsive Behavior

### Mobile Menu

The theme automatically adapts the menu for mobile devices:

- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu or collapsed navigation
- Touch-friendly: Appropriate tap target sizes
---
