import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "轻舟",
  description: "轻舟 - 构建高性能云原生工具",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    search: {
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { 
        text: '开源项目', 
        items: [
          { text: 'Push Server', link: '/push-server/' }
        ]
      },
      { text: '关于我们', link: 'https://github.com/qingzhou-dev' }
    ],

    sidebar: {
      '/push-server/': [
        {
          text: 'Push Server',
          items: [
            { text: '项目简介', link: '/push-server/' }
          ]
        },
        {
          text: '使用指南',
          items: [
            { text: '快速开始', link: '/push-server/guide/getting-started' },
            { text: '注册企业微信', link: '/push-server/guide/register-wechat' },
            { text: '配置详情', link: '/push-server/guide/configuration' }
          ]
        },
        {
          text: '开发参考',
          items: [
            { text: 'API 文档', link: '/push-server/api/' }
          ]
        }
      ]
    },
    outline: {
      level: [3, 4], // 显示 h2 和 h3 标题
      label: '本页目录' // 右侧侧边栏显示的标题文本
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qingzhou-dev' }
    ],

    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright © 2026-present QingZhou Dev'
    }
  }
}))
