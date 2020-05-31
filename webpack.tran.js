const postcssPlugin = require('./transform/postcssPlugin');
const fs = require('fs');
const animateCssPath = './node_modules/animate.css/source'
const dir = fs.readdirSync(animateCssPath).filter(n=>n.indexOf('.') === -1)
let entrys = [];
for (let index = 0; index < dir.length; index++) {
    const name = dir[index];
    let files = fs.readdirSync(`${animateCssPath}/${name}`)
    for (let j = 0; j < files.length; j++) {
        const fileName = files[j];
        entrys.push(`${animateCssPath}/${name}/${fileName}`)
    }
}
module.exports = {
    entry: entrys,
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    {
                        loader: 'postcss-loader',
                        options:{
                            plugins:[postcssPlugin()]
                        }
                    },
                ],
            },
        ],
    },
};
