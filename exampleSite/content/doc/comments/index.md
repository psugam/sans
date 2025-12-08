+++
title = 'Comments'
date = 2023-01-01T08:00:00-07:00
draft = false
toc = true
showFrontMatter=false
[build]
  list="never"
+++

This theme supports [Giscus](https://giscus.app/) - a comments system powered by GitHub Discussions. This guide will help you set up comments for your Hugo site.

## Prerequisites

Before configuring Giscus, ensure you have:

1. A public GitHub repository
2. The [Giscus app](https://github.com/apps/giscus) installed on your repository
3. GitHub Discussions enabled in your repository settings

## Use Discus

### Step 1: Enable GitHub Discussions

1. Go to your GitHub repository
2. Navigate to **Settings** → **Features**
3. Check the **Discussions** checkbox

### Step 2: Install Giscus App

1. Visit [github.com/apps/giscus](https://github.com/apps/giscus)
2. Click **Install**
3. Select the repository where you want to enable comments

### Step 3: Get Your Giscus Configuration

1. Go to [giscus.app](https://giscus.app/)
2. Fill in your repository details in the configuration form
3. Choose your preferred settings
4. Copy the generated values from the script tag

### Step 4: Configure in Hugo

Open your `config/params.toml` file and update the `[giscus]` section:
{{<codeblock lang="toml">}}
[giscus]
  enable = true  # Set to true to enable comments
  src = "https://giscus.app/client.js"
  
  # Repository settings (from giscus.app)
  dataRepo = "yourusername/repo-name"  # Your GitHub username/repository
  dataRepoId = "R_kgDOQHNo3Q"          # Copy from giscus.app
  
  # Discussion category settings
  dataCategory = "Announcements"        # Choose a category
  dataCategoryId = "DIC_kwDOQHNo3c4CxQcB"  # Copy from giscus.app
  
  # Mapping and behavior
  dataMapping = "pathname"              # How to map pages to discussions
  dataStrict = "0"                      # 0 = create discussion if not found
  dataReactionsEnabled = "1"            # Enable reactions (1 = yes, 0 = no)
  dataEmitMetadata = "0"                # Emit discussion metadata
  dataInputPosition = "bottom"          # Comment box position (top/bottom)
  
  # Appearance
  dataTheme = "preferred_color_scheme"  # Theme (see options below)
  dataLang = "en"                       # Language code
  
  # Loading
  dataLoading = "lazy"                  # Lazy load comments
  crossorigin = "anonymous"             # CORS setting
{{</codeblock>}}

## Example Configuration

Here's a complete working example:
{{<codeblock lang="toml">}}
[giscus]
  enable = true
  src = "https://giscus.app/client.js"
  dataRepo = "johndoe/my-blog"
  dataRepoId = "R_kgDOH1234A"
  dataCategory = "Blog Comments"
  dataCategoryId = "DIC_kwDOH1234c4CaBcD"
  dataMapping = "pathname"
  dataStrict = "0"
  dataReactionsEnabled = "1"
  dataEmitMetadata = "0"
  dataInputPosition = "bottom"
  dataTheme = "preferred_color_scheme"
  dataLang = "en"
  dataLoading = "lazy"
  crossorigin = "anonymous"
{{</codeblock>}}

## Disabling Comments on Specific Pages

To disable comments on individual pages, add this to the page's front matter:

{{<codeblock lang= "yaml">}}
---
title: "My Page"
comments: false  # Disable comments for this page
---
{{</codeblock>}}


Or in TOML format:
{{<codeblock lang="toml">}}
+++
title = "My Page"
comments = false
+++
{{</codeblock>}}
