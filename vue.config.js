const path = require('path')
const src = path.join(__dirname,'src')


module.exports = {
    pages: {
        index: {
            entry: 'src/examples/main.js'
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@examples',path.join(src,'examples'))
            .set('@components',path.join(src,'components'))
            .set('@packages',path.join(src,'packages'))
            .set('@utils',path.join(src,'utils'))
            .set('@mixins',path.join(src,'mixins'));
    }
}
