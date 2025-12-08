+++
title = 'Hosting your site'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

This guide covers deploying your Hugo site built with the *sans* theme to popular hosting platforms. All configurations include Pagefind search indexing.

---

## GitHub Pages

GitHub Pages offers free hosting for static sites directly from your repository.
> *Note*: Before deploying your blog on github pages make sure that the following configuration is set in your *hugo.toml* file.
{{<codeblock lang="toml">}}
baseURL = "https://yourusername.github.io/your-blog"
canonifyURLs = true  
relativeURLs = false  
{{</codeblock>}}

If your blog is on a subdomain (i.e. with /your-repo-name rather than just yourusername.github.io), make sure that you include the full url with repo-name as well. Do not include slash at the end.

Make sure that *canonifyURLs* is set to true and *relativeURLS* is set to false. Errors may occur if this is not done.

### Enable GitHub Pages

1. Go to your github repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Go to **Actions**→ **New Workflow** and search for hugo. Github automatically generates a hugo.yml at `your-hugo-site/.github/workflows/hugo.yml`
4. If you have disabled the search option for your hugo blog. Leave the hugo yml as it is.
5. If you have enabled search function, remove the *steps* in hugo.yml and replace by the following:
   {{<codeblock lang="yml">}}
         steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Install Dart Sass
        run: sudo snap install dart-sass
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - name: Install Node.js dependencies
        run: "[[ -f package-lock.json || -f npm-shrinkwrap.json ]] && npm ci || true"
      - name: Install Pagefind
        run: npm install -g pagefind
      - name: Build with Hugo
        env:
          HUGO_CACHEDIR: ${{ runner.temp }}/hugo_cache
          HUGO_ENVIRONMENT: production
        run: |
          hugo \
            --config hugo.toml \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Build Pagefind search index
        run: npx pagefind --site public --output-path public/pagefind
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
   {{</codeblock>}}
 Or replace the whole hugo.yml code with the following:
   {{<codeblock lang="yml">}}
          # Sample workflow for building and deploying a Hugo site to GitHub Pages
name: Deploy Hugo site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["master"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

# Default to bash
defaults:
  run:
    shell: bash

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.146.0
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Install Dart Sass
        run: sudo snap install dart-sass
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - name: Install Node.js dependencies
        run: "[[ -f package-lock.json || -f npm-shrinkwrap.json ]] && npm ci || true"
      - name: Install Pagefind
        run: npm install -g pagefind
      - name: Build with Hugo
        env:
          HUGO_CACHEDIR: ${{ runner.temp }}/hugo_cache
          HUGO_ENVIRONMENT: production
        run: |
          hugo \
            --config hugo.toml \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Build Pagefind search index
        run: npx pagefind --site public --output-path public/pagefind
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
   {{</codeblock>}}
---

## Vercel

Vercel provides fast deployments with automatic SSL and global CDN.

### Configuration

Create `vercel.json` in your project root:

{{<codeblock lang="json" >}}
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "public"
      }
    }
  ],
  "framework": null,
  "buildCommand": "npm run build",
  "outputDirectory": "public",
  "cleanUrls": true,
  "trailingSlash": false,
  "ignoreCommand": "git diff --quiet HEAD^ HEAD ./"
}
{{</codeblock >}}

This assumes that there is a *package.json* file at the base of your directory. This is already true if you previously installed pagefind for search functionality. If you have enabled search, your *package.json* should look something like this:
{{<codeblock lang = "json">}}
{
  "name": "your-hugo-site",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
  "serve": "hugo server --disableFastRender",
  "build": "npx hugo && npx pagefind --site public --output-path public/pagefind",
  "dev": "npx hugo --destination public && npx pagefind --site public --output-path public/pagefind && hugo server --disableFastRender --buildDrafts --noHTTPCache"
},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "hugo-extended": "^0.146.0"
  }
}
{{</codeblock>}}

If you do not have enabled search, your *package.json* should look something like this:
{{<codeblock lang="json">}}
{
  "name": "my-sans-site",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
  "serve": "hugo server --disableFastRender",
  "build": "hugo",
  "dev": "hugo --destination public && hugo server --disableFastRender --buildDrafts --noHTTPCache"
},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "hugo-extended": "^0.146.0"
  }
}

{{</codeblock>}}

When you create and install packages using npm, a *package-lock.json* file is automatically created. The absence of this file may lead to error, especially during deployment rather than local environment. Make sure you have a package-lock.json file with the following content at the minimum ( other packages will be added automatically if you install them in your environment.)

{{<codeblock lang="go">}}
{
  "name": "my-hugo-site", # this is the same name as in your package.json file
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "my-hugo-site", # this is the same name as in your package.json file
      "version": "1.0.0",
      "license": "ISC",
      "devDependencies": {
        "hugo-extended": "^0.146.0"
      }
    }
}
}
{{</codeblock>}}
### Deploy

1. **Via Vercel Dashboard**:
   - Import your Git repository
   - Vercel auto-detects configuration
   - Click **Deploy**

2. **Via CLI**:
   {{<codeblock lang="bash" >}}
   npm i -g vercel
   vercel
   {{</codeblock >}}

---

## Netlify

Netlify offers continuous deployment with built-in form handling and serverless functions.

### Configuration

Create `netlify.toml` in your project root:

{{<codeblock lang="toml" >}}
[build]
  publish = "public"
  command = "hugo --minify && npx pagefind --site public --output-path public/pagefind"

[build.environment]
  HUGO_VERSION = "0.146.0"
  NODE_VERSION = "20"

[[redirects]]
  from = "/pagefind/*"
  to = "/pagefind/:splat"
  status = 200
{{</codeblock >}}

### Deploy

1. **Via Netlify Dashboard**:
   - Connect your Git repository
   - Build settings are auto-detected from `netlify.toml`
   - Click **Deploy site**

2. **Via CLI**:
   {{<codeblock lang="bash" >}}
   npm i -g netlify-cli
   netlify deploy --prod
   {{</codeblock >}}

---

## Cloudflare Pages

Cloudflare Pages provides fast global deployment with integrated CDN and DDoS protection. Make sure that you have the same *package.json* files as those included in the [vercel](#vercel) section above.

### Configuration

1. **Connect Repository**:
   - Go to Cloudflare Dashboard → **Pages**
   - Click **Create a project**
   - Connect your Git repository

2. **Build Settings**:
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `public`
   - **Environment variables**:
     - `HUGO_VERSION`: `0.146.0`
     - `NODE_VERSION`: `20`

### Deploy

- Push to your repository's main branch
- Cloudflare Pages automatically builds and deploys

---

## Important Notes

### Build Command

All platforms use the same build process:

{{<codeblock lang="bash" >}}
npm run build
{{</codeblock >}}

This runs:

{{<codeblock lang="bash" >}}
hugo && npx pagefind --site public --output-path public/pagefind
{{</codeblock >}}

### Output Directory

Always use `public` as the output directory (Hugo's default).

### Hugo Version

Ensure your Hugo version in build configs matches your local development version. Current configs use **Hugo 0.146.0 Extended**.

### Node.js Version

All configurations use **Node.js 20** for consistency.

---
