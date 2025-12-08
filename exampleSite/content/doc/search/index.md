+++
title = 'Search'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++


This theme includes built-in search functionality powered by [Pagefind](https://pagefind.app/), a fast static search library that indexes your site content.

## Enabling/Disabling Search

Control the search icon visibility in your `params.toml`

{{<codeblock lang="toml">}}
[theme]
  showSearchIcon = true   # Enable search
  showSearchIcon = false  # Disable search
{{</codeblock>}}

---

## Setup & Commands

### When Search is Disabled (`showSearchIcon = false`)

You can use standard Hugo commands without any additional setup:

{{<codeblock lang="bash">}}
# Local development
hugo server

# Build for production
hugo
{{</codeblock>}}

No additional dependencies or configuration required.

---

### When Search is Enabled (`showSearchIcon = true`)

Search requires Pagefind to index your site content. Follow these steps:

#### 1. Pagefind Wrapper (Recommended)

First, ensure you have Node.js installed, then initialize a Node.js project with:

{{<codeblock lang="bash">}}
npm init -y
{{</codeblock>}}

This creates a basic node.js project on your root and creates a *package.json* file. In the *package.json* file replace the scripts with : 
{{<codeblock lang="json">}}
{
  "scripts": {
    "serve": "hugo server --disableFastRender",
    "build": "hugo && npx -y pagefind --site public --output-path public/pagefind",
    "dev": "hugo --destination public && npx -y pagefind --site public --output-path public/pagefind && hugo server --disableFastRender --buildDrafts --noHTTPCache"
  }
}
{{</codeblock>}}
This uses Pagefind's wrapper and is the easiest way to get search running. Now you can use  

#### 2. Install Pagefind Globally

You can also install pagefind binaries directly if you do not want to use the wrapper. This is not recommended generally.

{{<codeblock lang="bash">}}
npm install -g pagefind
{{</codeblock>}}


**For Local Development:**

{{<codeblock lang="bash">}}
npm run dev
{{</codeblock>}}

This command:
- Builds Hugo to the `public` folder
- Runs Pagefind to index content
- Starts Hugo server with drafts enabled

**For Production Build:**
{{<codeblock lang="bash">}}
npm run build
{{</codeblock>}}


This command:
- Builds Hugo to the `public` folder
- Runs Pagefind to index content
- Output is ready for deployment

**Simple Server (without rebuilding index):**

{{<codeblock lang="bash">}}
npm run serve
{{</codeblock>}}

Use this when you've already built the Pagefind index and just want to preview.

---

## Important Notes

### Always Use the `public` Folder

Pagefind is configured to:
- Read from: `public` (Hugo's build output)
- Write to: `public/pagefind` (search index location)

**Do not change the output directory** — the theme expects the search index at `/pagefind/`.

### How It Works

1. Hugo builds your site to `public/`
2. Pagefind scans `public/` and creates a search index
3. The search index is saved to `public/pagefind/`
4. When deployed, the search UI loads this index automatically

### What is indexed for search ?

Only those .md files which are considered posts are indexed by pagefind. If you .md files of type page, they will not be indexed and will not appear in search results. 

If you want a page that appears in search you can use the following workaround in your frontmatter. 
{{<codeblock lang="toml">}}
+++
title = 'Your Title'
date = 2023-01-01T08:00:00-07:00
showFrontMatter=false
type='post'
[build]
  list="never"
+++


{{</codeblock>}}

### Deployment

When deploying to platforms like Netlify, Vercel, or GitHub Pages, use the build command:

{{<codeblock lang="bash">}}
npm run build
{{</codeblock>}}

Or configure your platform's build command to:

{{<codeblock lang="bash">}}
npx hugo && npx pagefind --site public --output-path public/pagefind
{{</codeblock>}}

More about deployment [here](doc/hosting-your-site). 

---
