---
title: Frontend
tags:
- frontend
- issues
- learning
---

# Frontend

<TagLinks />


How to determine if CSS is loaded?
:   Watch devtools:Network panel

    ```js
    document.getElementsByTagName("link")
    document.styleSheets
    ```
How does HTML Forms work?
:   `<input>` are self closing HTML tags
    * Can have many many ==types==

    where should the form submit? `actions` attribute else local

    * use `name` attribute with `<input>` tag
    * `value` $\approx$ `placeholder` attributes are similar

* https://stackoverflow.com/questions/49656706/test-es6-modules-with-jest/49656707#49656707

How to composse HTML emails for gmail?
:   Write HTML for your email

    ::: tip HTML inline css tool
    Use **inline CSS styles** only, as gmail tends to drop other CSS attachment methods

    * [Juice CSS inliner](https://automattic.github.io/juice/)
    * [Example on how to use](https://youtu.be/ZSSqsEVsChc)
    :::

    Once HTML wil inline CSS is written, simply attach/include that inside your draft using manual DOM code injection. And we are good to go.

Create custom directives in vuejs, like `v-purple` or `v-anime`?
:   use Vue.directive method(name of directive, code of directive)

    ```vue
    Vue.directive('purple', function (el) {
        el.style.color = 'purple'
    })
    ```

* [How to use babel with jest?](https://jestjs.io/docs/en/getting-started#using-babel)

## Publishing

* [Scoped - namespace](https://docs.npmjs.com/misc/scope)

### For vuepress website

* I get all component files inside `node_modules` directory
* Then let vuepressa [register them as global components](https://vuepress.vuejs.org/plugin/official/plugin-register-components.html#install)

```bash
yarn add -D @vuepress/plugin-register-components
```

```js
[
  'register-components',
  {
    componentsDir: '../../node_modules/src/components'
  }
]
```

<Footer />
