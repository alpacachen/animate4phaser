import bezierEasing from 'bezier-easing';
function s2n(str, length, scale) {
    if (/px/.test(str)) {
        return +str.replace('px', '') * scale;
    } else if (/%/.test(str)) {
        return (str.replace('%', '') / 100) * length * scale;
    } else {
        return +str * scale;
    }
}

export default {
    transform: (value, targets, tweenScale) => {
        let { x, y, z, angle, scale, scaleX, scaleY, displayWidth, displayHeight } = targets;
        let pos = { x, y, z, angle, skewX: 0, skewY: 0 };
        let temp = null;
        value
            .split(/([0-9a-zA-Z_]*\(.*\)){1,1} ([0-9a-zA-Z_]*\(.*\))?/)
            .filter((i) => i !== '')
            .forEach((val) => {
                switch (true) {
                    case /translate3d/.test(val):
                        temp = val.match(/translate3d\((.*), (.*), (.*)\)/);
                        pos.x += s2n(temp[1], displayWidth, tweenScale);
                        pos.y += s2n(temp[2], displayHeight, tweenScale);
                        pos.z += +temp[3];
                        break;
                    case /translateX/.test(val):
                        pos.x += s2n(val.match(/translateX\((.*)\)/)[1], displayWidth, tweenScale);
                        break;
                    case /translateY/.test(val):
                        pos.y += s2n(val.match(/translateY\((.*)\)/)[1], displayHeight, tweenScale);
                        break;
                    case /rotate3d\(/.test(val):
                        temp = val.match(
                            /rotate3d\((-?[0-9]*\.?[0-9]*), (-?[0-9]*\.?[0-9]*), (-?[0-9]*\.?[0-9]*), (-?[0-9]*\.?[0-9]*)(?:deg)?\)/,
                        );
                        pos.angle += +temp[4];
                        break;
                    case /rotateY|rotate/.test(val):
                        pos.angle += +val.match(/[rotateY|rotate]\((-?[0-9]*)(?:deg)?\)/)[1];
                        break;
                    case /scale3d\(/.test(val):
                        temp = val.match(/scale3d\((-?[0-9]*\.?[0-9]*), (-?[0-9]*\.?[0-9]*), (-?[0-9]*\.?[0-9]*)\)/);
                        pos.scaleX = scaleX * +temp[1];
                        pos.scaleY = scaleY * +temp[2];
                        break;
                    case /scale\(/.test(val):
                        pos.scale = scale * +val.match(/scale\((-?[0-9]*\.?[0-9]*)\)/)[1];
                        break;
                    case /skewX/.test(val):
                        // TODO
                        console.log('TODO', +val.match(/skewX\((-?[0-9]*\.?[0-9]*)(?:deg)?\)/)[1]);
                        break;
                    case /skewY/.test(val):
                        // TODO
                        console.log('TODO', +val.match(/skewY\((-?[0-9]*\.?[0-9]*)(?:deg)?\)/)[1]);
                        break;
                    default:
                        break;
                }
            });
        return pos;
    },
    'animation-timing-function': (value) => {
        let obj = null;
        let temp = null;
        switch (true) {
            case /cubic-bezier/.test(value):
                temp = value.match(/cubic-bezier\((.*), (.*), (.*), (.*)\)/);
                obj = { ease: (t) => bezierEasing(temp[1], temp[2], temp[3], temp[4])(t) };
                break;
            default:
                break;
        }
        return obj;
    },
    'transition-timing-function': (value) => {
        let obj = null;
        let temp = null;
        switch (true) {
            case /cubic-bezier/.test(value):
                temp = value.match(/cubic-bezier\((.*), (.*), (.*), (.*)\)/);
                obj = { ease: (t) => bezierEasing(temp[1], temp[2], temp[3], temp[4])(t) };
                break;
            default:
                break;
        }
        return obj;
    },
    opacity: (value) => {
        return { alpha: +value };
    },
    'transform-origin': (value) => {
        console.log('transform-origin TODO')
        return null;
    },
    visibility: () => {
        console.log('visibility TODO')
        return null;
    }
};
