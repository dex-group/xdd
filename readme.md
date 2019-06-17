<p align="center">
  <a href="https://github.com/dex-group/gatsby-starter-dex">
    Gatsby Starter by DEX
  </a>
</p>

<p align="center">
  <a href="https://circleci.com/gh/fabe/gatsby-universal">
    <img
      src="https://circleci.com/gh/fabe/gatsby-universal.svg?style=svg"
      alt="CircleCI"
    />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"
      alt="styled with prettier"
    />
  </a>
  <a href="https://app.netlify.com/sites/gatsby-universal/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/3e49bb6e-c385-4807-a7e8-70eea491cfdf/deploy-status"
      alt="Netlify Status"
    />
  </a>
</p>

<p align="center">
  A Gatsby v2 starter.
</p>

<p align="center">
  <strong>
    You can access a demo of this starter online at <a href="https://gatsby-starter-dex.netlify.com">gatsby-starter-dex.netlify.com</a>.
  </strong>
</p>

***

## Features

- [X] 🤩 Page Transitions, component-based (with no-js support)
- [X] 💅 [Emotion](https://emotion.sh/)
- [X] 💅 [Tailwind CSS](https://tailwindcss.com/)
- [X] 💯 Optimized with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) (including test)
- [X] 🔪 Inline SVG support
- [X] 💙 Most social + meta tags in one component
- [X] 🖼 All favicons generated, only one icon file needed
- [X] 🌐 Offline support
- [X] 📄 Manifest support
- [X] 🗺 Sitemap support
- [X] 📱 Generated media queries for easy use
- [X] 😎 [Prettier](https://prettier.io/) for code style
- [X] 👷‍♂️ [CircleCI](https://circleci.com/) support
- [X] 🐙 Schema JSONLD
- [X] 🔎 [`size-plugin`](https://github.com/GoogleChromeLabs/size-plugin) to keep an eye on your bundle sizes
- [X] 👨‍🏫 ESLint (based on [`eslint-plugin-react`](./.eslintrc))

## Lighthouse scores (on [Netlify](https://netlify.com))

[![Lighthouse scores (on Netlify)](https://lighthouse.now.sh/?perf=100&pwa=100&a11y=100&bp=100&seo=100)]

## Usage

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dex-group/gatsby-starter-dex)

```bash
# Installation with `gatsby-cli`
gatsby new my-site https://github.com/dex-group/gatsby-starter-dex

# Installation with `git clone`
git clone git@github.com:dex-group/gatsby-starter-dex.git my-site
cd my-site
yarn install

# To develop
yarn develop

# To build
yarn build

# To test SSR (for Lighthouse etc.)
yarn ssr

# To format JS (precommit)
yarn format

# To generate favicons (included in `build`)
yarn build:favicons
```

## Author

* Ding Yi ([@dingyi](https://twitter.com/dingyi)) - [DEX](https://dex.group/)
