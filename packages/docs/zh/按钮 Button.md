# Button 按钮

### 代码演示

#### variant

按钮的 `variant` 分别为 `default`、`primary`、`success`、`warning`、`danger`

<button-basic />

@[code html](../components/button/basic.vue)

#### size

按钮的 `size` 分别为 `small`、`medium`、`large`，默认为 `medium`

<button-size />

@[code html](../components/button/size.vue)

### disabled

按钮添加 `disabled` 属性、或者 `disabled` 为 true 时，按钮不可点击

<button-disabled />

@[code html](../components/button/disabled.vue)

### ghost

按钮添加 `ghost` 属性，背景为透明色

<button-ghost />

@[code html](../components/button/ghost.vue)



### API

| 属性名   | 类型                                             | 默认值    | 说明 | 版本 |
|----------|--------------------------------------------------|-----------|------|------|
| variant  | `default`、`primary`、`success`、`warning`、`danger` | `default` | -    |      |
| size     | `small`、`medium`、`large `                        | `medium`  | -    |      |
| disabled | `boolean`                                        | `false`   | -    |      |
| ghost    | `boolean`                                        | `false`   | -    |      |
