const postcss = require('postcss');
const fs = require('fs')
module.exports = postcss.plugin('postcss-test-plugin', function (opts) {
    opts = opts || {};    // 处理 options
    return function (root, result) {
        const from = result.opts.from
        let part = /.*\/(.*)\/(.*)$/.exec(from)
        const outputPath = `${part[1]}/${part[2].replace('css', 'js')}`;
        let results = {
            common: {},
            list: {}
        };
        root.walkRules(function (rule) {
            const selector = rule.selector
            let type = 'list'
            if (/^\../.test(selector)) {
                type = 'common'
            }
            rule.walkDecls(function (decl) {
                if (type === 'common') {
                    results.common[decl.prop] = decl.value
                } else {
                    let selectorsArr = selector.split(',').map(i => i.trim())
                    selectorsArr = selectorsArr.map(i => {
                        if (i === 'from') {
                            return '0'
                        } else if (i === 'to') {
                            return '100'
                        } else {
                            return i.replace('%', '')
                        }
                    })
                    selectorsArr.forEach(step => {
                        if(results.list[step]){
                            results.list[step].push({[decl.prop]: decl.value});
                        }else{
                            results.list[step] = [{[decl.prop]: decl.value}]
                        }
                    })
                }
            })
        })
        let exist = fs.existsSync(`./transformDist/${part[1]}`)
        if(!exist){
            fs.mkdirSync(`./transformDist/${part[1]}`, {recursive: true})
        }
        fs.writeFile(`./transformDist/${outputPath}`, `module.exports = ${JSON.stringify(results, null, 4)}`, {}, function(err){
            err && console.log(err)
        })
    };
});
