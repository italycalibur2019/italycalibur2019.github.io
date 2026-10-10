import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  // 用户站点（italycalibur2019.github.io）部署在域名根路径，base 保持 '/'
  lang: 'zh-CN',
  title: 'Italycalibur的小站',
  description: '基于 VitePress 构建的个人站点',
  lastUpdated: true,

  // 浏览器标签页图标（favicon）：ico 兜底 + PNG 高清 + iOS 桌面图标
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '200x200', href: '/avatar.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/avatar.png' }]
  ],

  themeConfig: {
    // 左上角站点图标：GitHub 头像（放在 docs/public/ 下，以站点根路径引用）
    logo: '/avatar.png',

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '开发项目', link: '/developments/' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏（按路径前缀分区显示）
    sidebar: {
      '/developments/': [
        {
          text: '开发项目',
          items: [
            { text: '项目总览', link: '/developments/' },
            { text: 'Windows Java 开发环境一键配置', link: '/developments/java-dev-env-script' }
          ]
        }
      ]
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/vuejs/vitepress'
      }
    ],

    // 本地搜索（基于 MiniSearch，无需外部服务）
    search: {
      provider: 'local',
      options: {
        // 搜索框与弹窗界面中文化
        translations: {
          button: {
            buttonText: '搜索文章',
            buttonAriaLabel: '搜索文章'
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        },
        // 中文按单字切分（默认按空格分词会把整句中文当成一个词，导致搜不到）
        miniSearch: {
          options: {
            tokenize: (text: string) => {
              return (
                text
                  .toLowerCase()
                  .match(/[\u4e00-\u9fff]|[a-z0-9]+/g) ?? []
              )
            }
          }
        }
      }
    },

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
