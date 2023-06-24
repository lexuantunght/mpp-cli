const path = require('path');
const configFilePath = path.join(process.cwd(), "node_modules/mpp-cli/scripts/lang.js");

module.exports = {
    script: `node ${configFilePath}`
}
