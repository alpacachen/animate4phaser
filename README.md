# phaser-animate
phaser版的animate.css，支持了大多数动画
==========
> 注意：由于没有精力测试和维护。使用前请务必clone项目yarn start一下，看看哪些动画不能用
#### 1、脚本调用
```js
import { animate, list } from '@ipalfish/phaser-animate'
// 支持动作列表
console.log(list)

const boy = new Phaser.GameObjects.Image(this.scene, 0, 0, src);

animate({
    targets: boy,
    name: 'bounce',
}).then((e)=>{
    // e => boy
    console.log(e)
})
```

参数：
```json
{
    targets: 必填,
    name: 必填，
    time: 非必填 默认1000ms
    mode: 非必填 forwards｜backwards，默认backwards,
    tweenScale: 非必填 Number 动作幅度默认1
}
```
#### 2、示例

```javaScript
yarn
yarn start
```

> ps：想要更新动画，就重新yarn add animate.css，然后 yarn tran。
