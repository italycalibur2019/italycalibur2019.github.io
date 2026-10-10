/**
 * 开发项目数据表
 *
 * 新增一个项目只需两步：
 * 1. 在 docs/developments/ 下新建对应的 .md 详情页；
 * 2. 在下面的数组里添加一条记录，卡片就会自动出现在总览页。
 */
export interface ProjectItem {
  /** 项目名称 */
  name: string
  /** 一句话简介（显示在卡片上） */
  description: string
  /** 详情页路径，对应 docs/developments/ 下的 md 文件（不含 .md 后缀） */
  link: string
  /** GitHub 仓库地址（可选，不填则卡片上不显示 GitHub 入口） */
  github?: string
  /** 技术标签（可选） */
  tags?: string[]
  /** 状态徽标文字（可选），如「开发中」「已发布」「已归档」 */
  status?: string
}

export const projects: ProjectItem[] = [
  {
    name: 'Windows Java 开发环境一键配置',
    description: '一套面向 Windows 的 PowerShell 脚本，用于在新机器上快速搭好 Java 开发环境',
    link: '/developments/java-dev-env-script',
    github: 'https://github.com/italycalibur2019/Java-Dev-Env-Script',
    tags: ['PowerShell'],
    status: '已发布'
  }
]
