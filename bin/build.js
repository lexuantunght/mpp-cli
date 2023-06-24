const { getArgs } = require('../utils/get-args');

const entry = getArgs().entry || "index.js";

module.exports = {
    script: `cross-env NODE_ENV=production webpack --entry ${entry}`
};
