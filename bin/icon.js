const path = require('path');
const configFilePath = path.join(process.cwd(), "node_modules/mpp-cli/gulpfile.js");

module.exports = {
    script: `gulp -f ${configFilePath} iconfont`
}
