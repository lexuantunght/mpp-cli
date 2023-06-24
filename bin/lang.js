const path = require('path');
const configFilePath = path.join(process.cwd(), "scripts/lang.js");

module.exports = {
    script: `node ${configFilePath}`
}
