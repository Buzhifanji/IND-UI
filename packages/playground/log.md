## vite monorepo 包之间依赖问题

需要 在 package.json 配置

```json
{
  "exports": {
    ".": {"import": "./index.js"}
  }
}
```

## 本地宝安装到全局 

```shell
pnpm i -D -W 包名
```

## 安装到局部

```shell
pnpm install 包名 -r --filter 需要安装到具体哪个包名
```