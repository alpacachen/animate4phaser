# phaser-animate
> animate.css for Phaser, Automatic conversion based on [animate.css](https://github.com/animate-css/animate.css)

> ps:the core is Exhausting all the css rules animate.css used.so if animate.css use some rules that never used before, some animation might be wrong. 
# DEMO
[Demo](http://www.qwero.cn/index.html#/animate4phaser "")

#### Usage
```js
import { animate, list } from '@ipalfish/phaser-animate'
// supported animationList
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
#### Options
| option | necessary | type | desc |
| :-------- |:-----:| :-----:| :-----|
| targets | yes | Phaser.GameObject | - |
| name | yes | String | supported animation name |
| time | no | Number | animate duration |
| mode | no | String | 'backwards' or 'forwards', default 'backwards' |
| tweenScale | no | Number | Range of motion, default 1 |

#### Develop

```javaScript
// install dependencies
yarn

// run dev mode
yarn start

// get lastest animate.css code and transform
yarn tran

// build
yarn build
```