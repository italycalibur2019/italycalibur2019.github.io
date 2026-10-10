# Windows Java 开发环境一键配置

> 状态：✅ 已发布 ｜ 技术栈：PowerShell ｜ [GitHub 仓库](https://github.com/italycalibur2019/Java-Dev-Env-Script){target=_blank}

## 简介

一套面向 Windows 的 PowerShell 脚本，用于在新机器上快速搭好 Java 开发环境： JDK、Maven、Git、Node.js、DSH（DeepSeek Harness 桌面端）、IntelliJ IDEA、PostgreSQL、Redis、DBeaver、HeidiSQL， 以及 SSH 终端 WindTerm、API 测试 Apifox、Redis 可视化 Tiny RDM 全部绿色免安装（解压即用；DSH 桌面端是官方安装包，会静默装到安装目录内）， 自动写入用户级环境变量、生成桌面快捷方式、初始化数据库，并把连接信息整理成可直接粘贴到 Spring Boot 配置里的文件。 PostgreSQL / Redis 默认随登录自动启动（无需管理员），桌面启停快捷方式使用专门合成的「logo + 启停角标」图标。
## 功能特性

- ✅ 无需管理员权限（默认流程全部写入当前用户，不碰系统目录与 HKLM）
- ✅ 脚本会自动探测并复用机器上已有的组件，不会盲目重复下载
- ✅ 所有版本、镜像、端口、密码、快捷方式都可通过 JSON 配置定制
- 🚧 计划增加hosts自定义配置、Maven私有库配置等

## 快速开始

```bash
# 克隆项目
git clone https://github.com/italycalibur2019/Java-Dev-Env-Script.git
cd Java-Dev-Env-Script

# 启动方式：双击 install.cmd（推荐），或在该目录打开终端执行
install.cmd
```

## 更新日志

- **2026-10-09** 创建项目页面
