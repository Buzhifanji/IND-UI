# 加载 Spin 

为了用户更好的体验，当资源还在加载中的时候，提示 loading 效果。

### 代码演示

#### 基础用法

直接使用即可

<spin-basic />

@[code html](../../demos/spin/basic.vue)

#### size

你可以通过字体来修改大小

@[code html](../../demos/spin/size.vue)

<spin-size />

### width

你可以通过 `--spin-width` 属性来修改宽度

<spin-width />

@[code html](../../demos/spin/width.vue)

### color

你可以通过 `--spin-color` 属性来修改颜色

<spin-color />

@[code html](../../demos/spin/color.vue)

### speed

转圈圈的速度不满意？你可以通过 `--spin-speed` 属性来修改速度

<spin-speed />

@[code html](../../demos/spin/speed.vue)

### API

#### CSS Custom Properties

| 属性名         | 默认值    | 说明        | 版本 |
|----------------|-----------|-----------|------|
| `--spin-width` | `2px`     | Spin 的宽度 |      |
| `--spin-color` | `#6777ef` | Spin 的颜色 |      |
| `--spin-speed` | `2s`      | Spin 的速度 |      |

#### CSS Parts

| 属性名 | 说明                | 版本 |
|--------|-------------------|------|
| `base` | 组件内部的 svg 元素 |      |
