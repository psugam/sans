+++
title = 'A Page Like This'
date = 2023-01-01T08:00:00-07:00
draft = false
toc = false
showFrontMatter=false
[build]
  list="never"
+++

Sometimes you might want to remove all the post lists completely and just have a simple minimal page that lists the posts or any other page that you want to add manually. The [documentation list](/doc/) page in this site does this. The downside of this approach is that the posts would not show in the taxonomies page.

If you want to remove a certain post from appearing in post lists or similar list pages, add this to that post's front matter.

{{<codeblock lang="toml">}}
[build]
  list="never"
{{</codeblock>}}

If you want the */posts/* list page to not display any posts, just add the params above to the frontmatter of every post in that folder. Then in the *_index.md* at the root of */posts/* add your links as you want. The [doc](/doc/) page for example is added like this:

{{<codeblock lang="markdown">}}

1. [Installation](/doc/installation)
2. [Homepage](/doc/homepage)
3. [Taxonomy](/doc/taxonomy/)
4. [Menu](/doc/menu)
5. [Color Scheme](/doc/color-scheme)
6. [Front Matter](/doc/front-matter)
7. [Params and Customization](/doc/params-and-customization)
8. [Shortcodes](/doc/shortcodes)
9. [A Page like this](/doc/a-page-like-this/)
10. [Search](/doc/search)
11. [Comments](/doc/comments)
12. [Hosting](/doc/hosting-your-site)

---
{{</codeblock>}}

If any posts inside you folder haven't been removed, they will appear below this content from your *_index.md*. This is true for all list pages regardless of whether or not the list of posts or pages appear there.
