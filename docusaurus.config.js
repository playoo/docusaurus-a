// docusaurus.config.js
export default {
  // 使用预设时，第一个文档实例（默认）在 presets 中配置
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'product', // 可以不写 id，作为默认实例
          path: 'product', // 文档文件所在文件夹
          routeBasePath: 'product', // 访问路由：/product/
          sidebarPath: './sidebarsProduct.js', // 独立的侧边栏
        },
        // ... 其他预设配置
      },
    ],
  ],
  // 第二个文档实例在 plugins 中配置
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community', // 唯一的 id
        path: 'community',
        routeBasePath: 'community', // 访问路由：/community/
        sidebarPath: './sidebarsCommunity.js',
      },
    ],
  ],
};
