require('dotenv').config()
const { description } = require('../../package')
const webpack = require('webpack')

const extendsNetworks = {
  email: {
    sharer: 'mailto:?subject=@title&body=@url%0D%0A%0D%0A@description',
    type: 'direct',
    icon: '/email.png',
  },
  pinterest: {
    sharer: 'https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title',
    type: 'popup',
    icon: '/pinterest.png',
  },
  linkedin: {
    sharer:
      'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
    type: 'popup',
    color: '#1786b1',
    icon:
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
  }
}

module.exports = {
  configureWebpack: (config) => {
    return { plugins: [
      new webpack.EnvironmentPlugin({ ...process.env })
    ]}
  },
  title: '@avi/vue-components',
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/w3.css' }],        // load css from public
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  configureWebpack: (config) => {
    return { plugins: [
      new webpack.EnvironmentPlugin({ ...process.env })
    ]}
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@sc': 'screenshots'
      }
    }
  },
  themeConfig: {
    author: 'avimehenwal',
    repo: 'avimehenwal/vue-components',
    repoLabel: 'GitHub',
    repo: '',
    docsDir: '',
    editLinks: true,
    editLinkText: 'Help me improve this page!',
    lastUpdated: true,
    logo: '/logo.svg',
    // displayAllHeaders: true,               // Default: false
    activeHeaderLinks: true,
    sidebar: 'auto',
    sidebarDepth: 2,
    searchPlaceholder: 'Search...',
    smoothScroll: true,
    nav: [
      { text: 'Guide', link: '/guide/', },
      { text: 'Config', link: '/config/' },
      { text: 'VuePress', link: 'https://v1.vuepress.vuejs.org' }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-active-header-links",
    "@vuepress/plugin-last-updated",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/plugin-back-to-top",
    "vuepress-plugin-auto-sidebar",
    "@vuepress/plugin-nprogress",
    "@vuepress/plugin-blog",
    "reading-progress",
    "@vuepress/pwa",
    "img-lazy",
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
    [
      'sitemap',
      {
        hostname: 'https://avimehenwal2.netlify.app/'
      },
    ],
    [ '@vssue/vuepress-plugin-vssue', {
        // set `platform` rather than `api`
        platform: 'github',
        // all other options of Vssue are allowed
        owner: 'avimehenwal',
        repo: 'vue-components',
        clientId: process.env.GH_ClientId,
        clientSecret: process.env.GH_ClientSecret,
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
    ['vuepress-plugin-reading-time', {
      excludes: ['/about', '/tag/.*']
    }],
    // https://mermaid-js.github.io/mermaid/#/mermaidAPI?id=mermaidapi-configuration-defaults
    [ 'vuepress-plugin-mermaidjs', {
      // "theme": 'forest',
      // "theme": 'dark',
      "theme": "default",
      // "font-size": "20",
      gantt: {
        titleTopMargin:20,
        barHeight:30,
        barGap:10,
        topPadding:50,
        leftPadding:0,
        gridLineStartPadding:10,
        fontSize:25,
        fontFamily:'"Open-Sans", "sans-serif"',
        numberSectionStyles:4,
        axisFormat:'%Y-%m-%d',
      }
    }],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'social-share',
      {
        networks: ['twitter', 'facebook', 'reddit', 'telegram', 'whatsapp'],
        email: 'avi.mehanwal@gmail.com',
        twitterUser: 'avimehenwal',
        fallbackImage: '/hero.png',
        autoQuote: true,
        isPlain: false,
        extendsNetworks,
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [ // DOESNT WORK, want to put title(author name) after main content
      'vuepress-plugin-container',
      {
        type: 'quote',
        defaultTitle: 'Anonymous',
        before: info => `<div class="quote">`,
        after: info => `<p class="title">${info}</p></div>`,
      },
    ]
  ],
  markdown: {
    // options for markdown-it-anchor
    // anchor: { permalink: false },
    // options for markdown-it-toc
    // toc: { includeLevel: [1, 2] },
    linkify: true,                // convert markdown link texts to links
    extendMarkdown: md => {
      md.use(require('markdown-it-container'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-emoji'))
      md.use(require('markdown-it-abbr'))
      md.use(require('markdown-it-mark'))
      md.use(require('markdown-it-sup'))
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-ins'))
    }
  }
}
