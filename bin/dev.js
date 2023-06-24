#! /usr/bin/env node
const { exec } = require('child_process');
const { getArgs } = require('../utils/get-args');

const entry = getArgs().entry || "index.js";

exec(`cross-env NODE_ENV=development ENTRY=${entry} webpack-dev-server`);
