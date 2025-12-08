+++
title = 'Taxonomy Configuration'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"

+++

Taxonomies provide a powerful method for organizing and categorizing content in Hugo. The Sans theme supports Hugo's flexible taxonomy system, allowing you to use default taxonomies or create custom classifications for your content.

---

## Understanding Taxonomies

Taxonomies are classification systems that enable content grouping and relationship building. Hugo automatically handles taxonomy generation and page creation once configured.

### Default Taxonomies

The theme includes three pre-configured taxonomies commonly used in content management:

{{< table headers="Taxonomy|Singular|Plural|Use Case" caption="Default Taxonomy Types" >}}
Tags|tag|tags|Keyword-based content classification
Categories|category|categories|Broad content grouping
Authors|author|authors|Content attribution and authorship tracking
{{< /table >}}

---

## Configuration

### Basic Setup

Taxonomies are configured in the `hugo.toml` file. Navigate to the `[taxonomies]` section and specify your desired taxonomies:

{{<codeblock lang="toml">}}
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
{{</codeblock>}}

### Configuration Syntax

{{< table headers="Component|Description|Example" caption="Taxonomy Configuration Syntax" >}}
Singular Form|Left side of assignment|tag, category, author
Plural Form|Right side of assignment|tags, categories, authors
Format|singular = "plural"|tag = "tags"
{{< /table >}}

**Important**: The singular form defines the taxonomy identifier used in front matter, while the plural form determines the URL structure and list page naming.

---

## Custom Taxonomies

### Creating Custom Taxonomies

The process of creating custom taxonomies follows the same logic as that of default taxonomies. 
#### Syntax Pattern

{{<codeblock lang="toml">}}
[taxonomies]
  singular = "plural"
{{</codeblock>}}

#### Custom Taxonomy Examples

{{<codeblock lang="toml">}}
[taxonomies]
  # Default taxonomies
  tag = "tags"
  category = "categories"
  author = "authors"
  
  # Custom taxonomies
  series = "series"
  topic = "topics"
  project = "projects"
  location = "locations"
  difficulty = "difficulties"
{{</codeblock>}}


---

## Using Taxonomies in Content

### Front Matter Configuration

Once taxonomies are defined in `hugo.toml`, assign them to individual content files through front matter:

{{<codeblock lang="yaml">}}
+++
title = "Understanding Taxonomies"
date = 2024-01-15
tags = ["hugo", "documentation", "taxonomies"]
categories = ["tutorials"]
authors = ["John Doe", "Jane Smith"]
series = ["Hugo Basics"]
topics = ["content-organization"]
+++
{{</codeblock>}}

### Multiple Values

Taxonomies accept multiple values, enabling comprehensive content classification:

{{<codeblock lang="yaml">}}
tags = ["web-development", "hugo", "static-sites", "jamstack"]
categories = ["tutorials", "technical"]
authors = ["Author One", "Author Two"]
{{</codeblock>}}

### Single Value Taxonomies

For taxonomies requiring only one value per post:

{{<codeblock lang="yaml">}}
difficulty = ["beginner"]
format = ["video"]
{{</codeblock>}}

---

## Taxonomy Page Generation

Hugo automatically generates several page types for each configured taxonomy:

{{< table headers="Page Type|URL Pattern|Description" caption="Auto-Generated Taxonomy Pages" >}}
Taxonomy List|/tags/|Lists all available tags
Taxonomy Terms|/tags/hugo/|Shows all posts tagged with 'hugo'
Taxonomy RSS|/tags/index.xml|RSS feed for taxonomy
Taxonomy Terms RSS|/tags/hugo/index.xml|RSS feed for specific term
{{< /table >}}

### URL Structure Examples

With the configuration `tag = "tags"` and `series = "series"`:

{{<codeblock lang="text">}}
/tags/                    # All tags
/tags/hugo/              # Posts with tag "hugo"
/categories/             # All categories
/categories/tutorials/   # Posts in category "tutorials"
/series/                 # All series
/series/hugo-basics/     # Posts in series "hugo-basics"
{{</codeblock>}}

---

## Display Configuration

### Taxonomy Visibility

Control taxonomy display in various contexts through the `[posts]` and `[sections]` configuration:

{{<codeblock lang="toml">}}
[posts]
  showTags = true
  showCategories = true
  showAuthors = true
  showTagCloud = false
  showCategoryCloud = false
  showAuthorCloud = false

[sections]
  showTags = false
  showCategories = false
  showAuthors = false
{{</codeblock>}}

---

## Advanced Configuration

### Taxonomy Weight and Ordering

Control taxonomy display order through front matter weights:

{{<codeblock lang="yaml">}}
+++
title = "Advanced Hugo"
categories = ["tutorials"]
tags = ["hugo", "advanced"]
tags_weight = 10  # Higher weight = appears first
+++
{{</codeblock>}}

### Preserving Taxonomy Case

By default, Hugo lowercases taxonomy values. To preserve case:

{{<codeblock lang="toml">}}
[taxonomies]
  tag = "tags"

preserveTaxonomyNames = true
{{</codeblock>}}

---

### Taxonomy Rename Process

To rename a taxonomy:

1. Update `hugo.toml` configuration
2. Update all content front matter
3. Rebuild site to regenerate pages
4. Implement 301 redirects for old URLs
5. Update internal links and references

---
