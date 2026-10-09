# Markdown 示例

本页展示 VitePress 支持的常用 Markdown 扩展语法。

## 代码块

支持语法高亮，也可以标注高亮行（`{4}`）：

```ts{4}
export default {
  name: 'MyComponent',
  data() {
    return { msg: '你好，VitePress！' }
  }
}
```

## 代码分组

::: code-group

```bash [npm]
npm run docs:dev
```

```bash [pnpm]
pnpm run docs:dev
```

:::

## 提示容器

::: info 信息
这是一条信息。
:::

::: tip 提示
这是一条提示。
:::

::: warning 注意
这是一条警告。
:::

::: danger 危险
这是一条危险警告。
:::

## 表格

| 特性     | 支持情况 |
| -------- | -------- |
| 语法高亮 | ✅       |
| 表格     | ✅       |
| Emoji    | ✅ 🎉    |
