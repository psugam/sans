+++
date = '2025-10-30T17:48:48+05:45'
draft = false
title = 'Installation Guide'
tags = ['installation','documentation']
authors = ['John']
categories=['category-1', 'category-2']
showFrontMatter=false
toc=true
[build]
  list="never"
+++

This guide will walk you through installing the Sans theme for your Hugo site.

---

## Prerequisites

Before installing the Sans theme, ensure your development environment meets the following requirements:

{{<table headers="Requirement|Minimum Version" caption="System Requirements" >}}
Hugo Extended|0.146.0+
Git|2.0+
Node.js|18.0+
npm|9.0+
{{</table >}}

### Verify Hugo Installation

Confirm that Hugo is properly installed and meets the minimum version requirement:

{{<codeblock lang="bash">}}
hugo version
{{</codeblock>}}

Expected output:

{{<codeblock lang="bash">}}
hugo v0.146.0+extended darwin/amd64 BuildDate=...
{{</codeblock>}}

**Important**: Ensure you have the **Extended** version of Hugo installed, as the theme requires Hugo Extended features for SCSS/Sass processing.

### Verify Git Installation

{{<codeblock lang="bash">}}
git --version
{{</codeblock>}}

### Verify Node.js and npm

{{<codeblock lang="bash">}}
node --version
npm --version
{{</codeblock>}}

---

## Installation Methods

### Option A: Git Submodule (Recommended)

Using Git submodules is the recommended approach as it allows easy theme updates and maintains a clean separation between your content and the theme.

#### Step 1: Initialize Git Repository

If your site isn't already a Git repository:

{{<codeblock lang="bash">}}
cd your-hugo-site
git init
{{</codeblock>}}

#### Step 2: Add Theme as Submodule

{{<codeblock lang="bash">}}
git submodule add https://github.com/psugam/sans themes/sans
{{</codeblock>}}

This creates a `themes/sans` directory containing the theme.

#### Step 3: Copy Required Files

Copy the following directories from the theme to your site root:

{{<codeblock lang="bash">}}
cp -r themes/sans/exampleSite/content ./
cp -r themes/sans/exampleSite/assets ./
cp -r themes/sans/exampleSite/config ./
{{</codeblock>}}

{{< admonition type="warning" title="Be Careful!" >}}
Sometimes the existing config or asset files inside the themes folder or themes/sans folder can interfere with the output of your root site. It is recommended to delete the *contents*, *assets* and *config* from the exampleSite and also the config folder of the themes when you have copied them already.
{{< /admonition >}}

#### Step 4: Configure Theme

Move `hugo.toml` from the config folder to your site root:

{{<codeblock lang="bash">}}
mv config/hugo.toml ./hugo.toml
{{</codeblock>}}

Open `hugo.toml` and verify the theme name is set correctly:

{{<codeblock lang="toml">}}
theme = "sans"
{{</codeblock>}}

#### Step 5: Test Installation

{{<codeblock lang="bash">}}
hugo server
{{</codeblock>}}

Visit `http://localhost:1313` to see your site.

---

### Option B: Manual Download

If you prefer not to use Git submodules, you can manually download the theme.

#### Step 1: Download Theme

1. Visit the [Sans theme repository](https://github.com/psugam/sans)
2. Click **Code** → **Download ZIP**
3. Extract the ZIP file

#### Step 2: Move Theme to Hugo Site

{{<codeblock lang="bash">}}
# Assuming extracted folder is named 'sans-theme-main'
mv sans-theme-main your-hugo-site/themes/sans
{{</codeblock>}}

**Important**: Ensure the theme folder is named exactly `sans` (not `sans-theme-main` or any other variation).

#### Step 3: Copy Required Files

Follow the same steps as Option A (Steps 3-6):

1. Copy `content`, `assets`, and `config` directories
2. Move `hugo.toml` to site root
3. Verify `theme = "sans"` in configuration
4. Run `npm install`
5. Test with `hugo server`

---

## Post-Installation Configuration

### Directory Structure

After installation, your site structure should look like this:

{{<codeblock lang="text">}}
your-hugo-site/
├── assets/
├── config/
├── content/
├── themes/
│   └── sans/
├── hugo.toml
├── package.json
└── node_modules/
{{</codeblock>}}

### Update Theme Configuration

Edit `hugo.toml` or configuration files in the `config/` directory to customize:

- Site title and description
- Author information
- Theme colors and appearance
- Social media links
- Menu structure
- Search functionality

Refer to the [Configuration Guide](/doc/params-and-customization) for detailed options.

---

## Updating the Theme

### For Git Submodule Installation

{{<codeblock lang="bash">}}
cd your-hugo-site
git submodule update --remote --merge
{{</codeblock>}}

### For Manual Installation

1. Download the latest version from GitHub
2. Replace the `themes/sans` directory with the new version
3. Review the [changelog](https://github.com/psugam/sans/releases) for breaking changes

---

## Next Steps

Now that you've installed the Sans theme, you can:

1. **[Configure Your Site](/doc/params-and-customization)** - Customize theme settings
2. **[Enable Search](/doc/search)** - Set up Pagefind search functionality
3. **[Deploy Your Site](/doc/hosting-your-site)** - Publish to hosting platforms

---
