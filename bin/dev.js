const argv = require('optimist').argv;
const path = require('path');

const entry = argv.entry || process.env.ENTRY || "index.js";
const configFilePath = path.join(process.cwd(), "node_modules/mpp-cli/webpack.config.js");

let script = `cross-env NODE_ENV=development webpack-dev-server --config ${configFilePath} --entry ${entry}`;

if (argv.port) {
    script += ` --port ${argv.port}`
}

module.exports = {
    script
}
