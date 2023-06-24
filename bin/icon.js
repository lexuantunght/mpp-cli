const path = require('path');
const argv = require('optimist').argv;
const configFilePath = path.join(process.cwd(), "node_modules/mpp-cli/gulpfile.js");

const inpDir = path.join(process.cwd(), argv.i);
const outDir = path.join(process.cwd(), argv.o);

module.exports = {
    script: `gulp -f ${configFilePath} iconfont --i ${inpDir} --o ${outDir}`
}
