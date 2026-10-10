---
title: 开发项目
---

<script setup>
import ProjectGrid from '../.vitepress/theme/components/ProjectGrid.vue'
import { projects } from '../.vitepress/data/projects'
</script>

# 开发项目

这里收录我自己开发的一些小项目。点击卡片可以进入项目详情页，查看项目介绍、功能特性与使用方式。

<ProjectGrid :projects="projects" />

<!--
  【站长备忘 · 不会显示在网站上】如何添加新项目：

  1. 创建详情页：在 docs/developments/ 下新建一个 md 文件（如 my-project.md），
     可以复制 示例项目（./java-dev-env-script）的结构来写；
  2. 登记卡片数据：在 docs/.vitepress/data/projects.mts 的数组里添加一条记录：

  {
    name: '我的新项目',
    description: '一句话介绍这个项目',
    link: '/developments/my-project',
    github: 'https://github.com/italycalibur2019/xxx', // 可选
    tags: ['Python'],                                  // 可选
    status: '开发中'                                   // 可选
  }

  保存后总览页的卡片会自动更新；同时别忘了在 docs/.vitepress/config.mts
  的 sidebar 里加上对应页面入口。
-->

