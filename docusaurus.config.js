
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docusaurus Templates',
  tagline: 'Some useful pages for Docusaurus',
  url: 'https://docusaurus-a.zh-cn.edgeone.cool/',
  baseUrl: '/', // For github.io/docusaurus-templates/
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'playoo', // Usually your GitHub org/user name.
  projectName: 'docusaurus-a', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/playoo/docusaurus-a/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/playoo/docusaurus-a/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'product',
        path: 'product',
        routeBasePath: 'product',
        sidebarPath: require.resolve('./sidebarsProduct.js'),
        // 设置首页文档
        homePageId: 'intro', // 假设你的产品文档首页文件是 intro.md
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        // 设置首页文档
        homePageId: 'welcome', // 假设你的社区文档首页文件是 welcome.md
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '我的收藏夹',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/product/intro',  // 直接链接到产品文档首页
            position: 'left',
            label: '产品文档',
          },
          {
            to: '/community/welcome',  // 直接链接到社区文档首页
            position: 'left',
            label: '社区文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            label: '更多',
            position: 'left',
            items: [
              { to: '/about', label: '关于' },
            ],
          },
          {
            href: 'https://github.com/playoo/docusaurus-a',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '产品文档',
                to: '/product/intro',
              },
              {
                label: '社区文档',
                to: '/community/welcome',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '关于',
                to: '/about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/playoo/docusaurus-a',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 我的项目. 使用 Docusaurus 构建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
