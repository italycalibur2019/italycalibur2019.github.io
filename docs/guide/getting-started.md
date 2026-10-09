# 快速开始

欢迎使用本站点！这是一个基于 [VitePress](https://vitepress.dev/zh/) 构建的站点。

## 本地开发

在项目根目录执行以下命令即可启动开发服务器：

```bash
npm run docs:dev
```

启动后访问终端中提示的地址（默认 `http://localhost:5173`），修改 Markdown 文件会即时热更新。

## 如何新增页面

1. 在 `docs/` 目录下新建一个 `.md` 文件，例如 `docs/notes/hello.md`；
2. 用任意 Markdown 语法书写内容；
3. 如果需要出现在侧边栏，编辑 `docs/.vitepress/config.mts` 中的 `sidebar` 配置。

## 构建与预览

```bash
# 构建生产版本到 docs/.vitepress/dist
npm run docs:build

# 本地预览构建产物
npm run docs:preview
```

推送代码到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages，站点地址为 <https://italycalibur2019.github.io>。
