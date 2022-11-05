// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'keydown-listener',
  tagline: 'keydown-listener Demo',
  url: 'https://dbsds.github.io',
  baseUrl: '/keydown-listener/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'keydown-listener', // Usually your repo name.
  staticDirectories: [
    path.join(__dirname, 'static')
  ],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'keydown-listener',
        items: [{
          href: 'https://github.com/DBSDs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub 仓库',
        }, ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: ['docusaurus-plugin-sass', './custom-webpack-alias']
};

module.exports = config;