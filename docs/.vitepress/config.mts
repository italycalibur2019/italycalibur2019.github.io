import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  // 用户站点（italycalibur2019.github.io）部署在域名根路径，base 保持 '/'
  lang: 'zh-CN',
  title: 'ItalyCalibur 的站点',
  description: '基于 VitePress 构建的个人站点',
  lastUpdated: true,

  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏（作用于 /guide/ 目录下的页面）
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: 'Markdown 示例', link: '/guide/markdown' }
          ]
        }
      ]
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/italycalibur2019/italycalibur2019.github.io'
      }
    ],

    // 中文界面文案
    outline: { label: '本页目录' },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: { prev: '上一页', next: '下一页' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
