# Sans Theme

A clean and minimal Hugo theme for bloggers and content creators.

## Features

- 🎨 Clean, minimalist design
- 🌙 Color scheme customization
- 📱 Fully responsive
- 🔍 Built-in search functionality
- 💬 Comments support
- 📑 Taxonomy support (tags, categories)
- ⚡ Fast and lightweight
- 🎯 SEO optimized
- 📝 Custom shortcodes
- 🎨 Customizable front matter

## Demo

Visit the [documentation site](https://sans-theme.pages.dev/doc/) to see the theme in action.

## Installation

### Method 1: Git Submodule

Add the theme as a git submodule to your Hugo project:

```bash
git submodule add https://github.com/psugam/sans.git themes/sans
```

### Method 2: Clone

Clone the theme directly into your themes directory:

```bash
cd themes
git clone https://github.com/psugam/sans.git
```

### Method 3: Hugo Modules

Initialize your Hugo site as a module and import the theme:

```bash
hugo mod init github.com/psugam/sans
```

Then add to your` hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/psugam/sans"
```

### Activate the Theme

Update your site's configuration file (`hugo.toml`):

```toml
theme = "sans"
```

## Quick Start

1. Install the theme using one of the methods above
2. Copy the config, content and assets folder from from `themes/sans/exampleSite/` to the root of your site.
3. Customize the configuration to your needs
4. Run `hugo server -D` to start the development server
5. Visit `http://localhost:1313` to see your site

## Configuration

### Basic Configuration

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "My Site"
theme = "sans"

[params]
  description = "A minimal blog"
  author = "Your Name"
```

### Menu Configuration

Define your site navigation in `config/menu.toml`:

```toml
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1

[[menu.main]]
  name = "Blog"
  url = "/posts/"
  weight = 2

[[menu.main]]
  name = "About"
  url = "/about/"
  weight = 3
```

### Color Scheme

Customize the theme colors to match your brand. See the [Color Scheme documentation](https://sans-theme.pages.dev/doc/color-scheme) for details.

## Content

### Creating Posts

Create a new post:

```bash
hugo new posts/my-first-post.md
```

### Front Matter

Available front matter options:

```yaml
---
title: "My Post Title"
date: 2024-01-01
draft: false
tags: ["tag1", "tag2"]
categories: ["category1"]
description: "Post description for SEO"
---
```

For more front matter options, see the [Front Matter documentation](https://sans-theme.pages.dev/doc/front-matter).

### Taxonomies

The theme supports tags and categories out of the box. Configure additional taxonomies in your `config.toml`.

Learn more in the [Taxonomy documentation](https://sans-theme.pages.dev/doc/taxonomy/).

## Features-List

### Search

Built-in search functionality to help users find content quickly. See the [Search documentation](https://sans-theme.pages.dev/doc/search) for setup instructions.

### Comments

Add comments to your blog posts. The theme supports various comment systems. Check the [Comments documentation](https://sans-theme.pages.dev/doc/comments) for configuration.

### Shortcodes

The theme includes several useful shortcodes for enhanced content formatting. See the [Shortcodes documentation](https://sans-theme.pages.dev/doc/shortcodes) for available shortcodes.

## Customization

The theme is highly customizable through parameters. For detailed customization options, refer to the [Params and Customization documentation](https://sans-theme.pages.dev/doc/params-and-customization).

## Deployment

### Build Your Site

```bash
hugo
```

This generates your static site in the `public/` directory.

### Hosting Options

The theme works with all popular hosting platforms:

- GitHub Pages
- Netlify
- Vercel
- GitLab Pages
- AWS S3

For detailed hosting instructions, see the [Hosting documentation](https://sans-theme.pages.dev/doc/hosting-your-site).

## Documentation

Full documentation is available at: [https://sans-theme.pages.dev/doc/](https://sans-theme.pages.dev/doc/)

Topics covered:
- [Installation](https://sans-theme.pages.dev/doc/installation)
- [Homepage Configuration](https://sans-theme.pages.dev/doc/homepage)
- [Taxonomy](https://sans-theme.pages.dev/doc/taxonomy/)
- [Menu](https://sans-theme.pages.dev/doc/menu)
- [Color Scheme](https://sans-theme.pages.dev/doc/color-scheme)
- [Front Matter](https://sans-theme.pages.dev/doc/front-matter)
- [Params and Customization](https://sans-theme.pages.dev/doc/params-and-customization)
- [Shortcodes](https://sans-theme.pages.dev/doc/shortcodes)
- [Search](https://sans-theme.pages.dev/doc/search)
- [Comments](https://sans-theme.pages.dev/doc/comments)
- [Hosting](https://sans-theme.pages.dev/doc/hosting-your-site)

## Support

If you encounter any issues or have questions:

- Check the [documentation](https://sans-theme.pages.dev/doc/)
- Open an issue on [GitHub](https://github.com/psugam/sans/issues)

## License

This theme is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

Created by [Sugam](https://www.sugam-pokharel.com.np/)

---

⭐ If you like this theme, please give it a star on GitHub!
