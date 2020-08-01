---
title: Javascript
tags:
- javascript
---

# Javascript

<TagLinks />

Repace `/` and `\` in filenames and paths to `-`
```javascript{2}
function fileToComponentName (file) {
  return file.replace(/\/|\\/g, '-')
}
```

**A module** is code that we group together for the purposes of sharing and reuse. Can export `const`, `str` or even `fucntions`.

> Originally JavaScript started in the browser—there was no module system at all.

```JavaScript
function getUser() {
    // Code here
}

function getUsers() {
    // Code here
}

module.exports = {
    getUser,
    getUsers
}
```

We can have nested functions, functions inside functions at any level in JS, even in exported modules.

## @vuepress/plugin-blog

[@vuepress/plugin-blog](https://vuepress-plugin-blog.ulivz.com/)

1. Classification / Taxonomy
2. Pagination
3. Sitemap
4. Comments Service - Vssue, disqus
5. Newsletter Service - MailChimp
6. Feed Service - RSS, Atom, and JSON

[Creating interactive CLI selector to run projects using inquirer](https://raw.githubusercontent.com/vuepressjs/vuepress-plugin-blog/master/examples/launch.js)

[Split configurations and import them using require.resolve(path)](https://raw.githubusercontent.com/ulivz/70-lines-of-vuepress-blog-theme/master/examples/.vuepress/config.js)

<Footer />
