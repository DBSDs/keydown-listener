
# keydown-listener

监听按键，返回web页面中按下的按键

keydownListener for website, return an pressing keys array


<!-- [![npm download](https://img.shields.io/npm/dw/watermark-monitor)](https://www.npmjs.com/package/watermark-monitor)
[![npm license](https://img.shields.io/npm/l/watermark-monitor)](https://www.npmjs.com/package/watermark-monitor)
[![npm type definitions](https://img.shields.io/npm/types/badge-maker)](https://www.npmjs.com/package/watermark-monitor) -->

</div>

---

## 特性
- 使用 TypeScript 编写，提供完善的类型定义
- 使用原生 javascript Api，支持跨框架使用

## 安装

```bash
// npm
npm install keydown-listener --save
```

## 用法

```js
import keydownListener from "keydown-listener";

const keyGen = keydownListener()

console.log(keyGen.keys)
```

| 参数       | 说明     | 类型    | 默认值 | 
|------------|--------|---------|--------|
| element | 监听事件的DOM | Element | document  | 
| onkeydown | 按下按键时的回调函数 | (val: {keys: string[], events: KeyboardEvent[]}) => void | undefined  |
| onkeyup | 放开按键时的回调函数 | (val: {keys: string[], events: KeyboardEvent[]}) => void | undefined  |
##  线上Demo

* [在线预览](https://dbsds.github.io/keydown-listener/)
