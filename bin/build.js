const argv = require('optimist').argv;
const path = require('path');

const entry = argv.entry || process.env.ENTRY || "index.js";
const configFilePath = path.join(process.cwd(), "webpack.config.js");

module.exports = {
    script: `cross-env NODE_ENV=production webpack --config ${configFilePath} --entry ${entry}`
};
