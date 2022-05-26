# 图标 Icon 

IND-UI 没有内置任何图标，推荐使用 [icones.js](https://icones.js.org/) 作为图标库。

### 使用教程

1. 下载需要的 svg 图标

从 [icones.js](https://icones.js.org/)下载 svg 图标，然后放置到项目的静态文件里

2. 注册图标库

通常图标库注册一次就够了，除非你想要多个图标库名。

所以如果你使用的是 Vue，下面的这段代码引入再 main.js 文件里；如果是 React 则是在 index.js 文件...

总之使用的原则是**先引入，后使用**

```javascript
import { registerIconLibrary } from "@ind/icon"; 

// my-icon 是图标库名称，你可以换成自己喜欢的名字
registerIconLibrary("my-icon", {
  handleUrl: (name: string) => `/public/icons/${name}.svg`, // 存在 icon 的静态文件的路径
  handleSvg: (svg) => svg.setAttribute("fill", "currentColor"), // 可选： 加入后，支持修改颜色
});
```

1. 使用 

::: warning
library 属性与注册时候的名字是一致的

name 是静态文件 svg 文件名
:::

```html
<i-icon library="my-icon" name="game"></i-icon>
```


### 代码演示

#### size

你可以通过修改字体来修改图标的大小

<icon-size />

@[code html](../../demos/icon/size.vue)

#### color

你可以通过修改字体来修改图标的大小

<icon-color />

@[code html](../../demos/icon/color.vue)

::: tip
如果遇到设置了clor，但是不能修改颜色的问题。

首先你检查一下[注册图标](#使用教程)的时候，是否设置支持修改颜色代码

```javascript
 handleSvg: (svg) => svg.setAttribute("fill", "currentColor")
```

其次你可以试着检查一下图标里 path 标签的 fill 属性，是否写成了固定颜色，如果是则修改成 `fill="currentColor"`

总之，svg 和 path 的fill 属性都需要设置成 `currentColor`,才支持自定义颜色。
:::

#### 自定义图标

将自定义 SVG 放入图标。（确保设定了 SVG 的 viewBox 属性）

<icon-DRY />

@[code html](../../demos/icon/DRY.vue)

### API

#### Properties

| 属性名    | 类型   | 默认值 | 说明                      | 版本 |
|-----------|--------|--------|-------------------------|------|
| `name `   | string |        | icon图标对应的 svg 文件名 |      |
| `library` | string |        | 注册的图标库名            |      |

#### Slots

| 名称      | 说明       | 版本 |
|-----------|----------|------|
| `default` | 图标的内容 |      |