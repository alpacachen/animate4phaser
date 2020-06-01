const fs = require('fs');
const animateCssPath = './node_modules/animate.css/source'
const dir = fs.readdirSync(animateCssPath).filter(n=>n.indexOf('.') === -1)
let entries = [];
for (let index = 0; index < dir.length; index++) {
    const name = dir[index];
    let files = fs.readdirSync(`${animateCssPath}/${name}`)
    for (let j = 0; j < files.length; j++) {
        const fileName = files[j].split('.')[0];
        entries.push({dir: name, file: fileName});
    }
}
let code = ''
let exportStr = 'export default { \n';
entries.forEach(({dir, file})=>{
    code += `import ${file} from './${dir}/${file}';\n`
})
entries.forEach(({file})=>{
    exportStr += `  ${file},\n`
})
exportStr += '};'
code += exportStr
fs.writeFile('./transformDist/index.js', code, {}, function (err) {
    err && console.log(err)
})
