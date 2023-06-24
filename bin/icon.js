const path = require('path');
const configFilePath = path.join(process.cwd(), "gulpfile.js");

module.exports = {
    script: `gulp -f ${configFilePath} iconfont`
}
