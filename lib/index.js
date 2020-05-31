import actions from '../transformDist';
import conversion from './conversion';

const animate = async ({ targets, name, time, mode = 'backwards', tweenScale = 1 }) => {
    const data = actions[name];
    if (!data) {
        console.warn('此动画后期支持');
        return;
    }
    const animationList = data.list;
    const commonList = data.common;
    // 执行时间
    let totalTime = 1000;
    let ease = null;

    const { x, y, z, angle, scale, scaleX, alpha, scaleY } = targets;
    const keys = Object.keys(animationList);
    //百分比排序
    keys.sort((a, b) => a - b);
    // 动画的前情配置
    Object.keys(commonList).forEach((key) => {
        if (key === 'animation-duration') {
            if(isNaN(Number(commonList[key].replace('s', '')))){
                totalTime = 1000
            }else {
                totalTime = Number(commonList[key].replace('s', '')) * 1000;
            }
        } else if (key === 'animation-timing-function') {
            switch (commonList[key]) {
                case 'ease-in-out':
                    ease = 'Cubic.easeInOut';
                    break;
                default:
                    break;
            }
        }
    });
    if (time) {
        totalTime = time;
    }
    // 生成缓动动画列表
    let temp = keys.map((key, index) => {
        let obj = {};
        obj.targets = targets;
        obj.duration = 0;
        // 计算每段动画的时常
        if (index === 0) {
            obj.duration = (key / 100) * totalTime;
        } else {
            obj.duration = ((key - keys[index - 1]) / 100) * totalTime;
        }
        const rules = animationList[key];
        rules.forEach((rule) => {
            const params = Object.entries(rule)[0];
            let res = conversion[params[0]](params[1], targets, tweenScale);
            obj = Object.assign(obj, res);
        });
        return obj;
    });
    //执行
    return new Promise((resolve) => {
        targets.scene.tweens.timeline({
            ease,
            tweens: temp,
            onComplete: () => {
                if (mode !== 'forwards') {
                    Object.assign(targets, {
                        x,
                        y,
                        z,
                        alpha,
                        angle,
                        scale,
                        scaleX,
                        scaleY,
                    });
                }
                resolve(targets);
            },
        });
    });
};
export default { animate, list: actions };
// window.animate = animate;
// window.animationList = list;
