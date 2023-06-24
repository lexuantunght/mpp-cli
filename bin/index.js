#! /usr/bin/env node
const { exec } = require('child_process');
const argv = require('optimist').argv;
const buildCmd = require('./build');
const devCmd = require('./dev');
const langCmd = require('./lang');
const iconCmd = require('./icon');
const helpCmd = require('./help');

let command = 'build';
if (argv["_"] && argv["_"][0]) {
    command = argv["_"][0];
}

console.log("Run mpp command:", command);

switch (command) {
    case 'build':
        exec(buildCmd.script);
        break;
    case 'dev':
        exec(devCmd.script);
        break;
    case 'lang':
        exec(langCmd.script);
        break;
    case 'icon':
        exec(iconCmd.script);
        break;
    case 'help':
        helpCmd.exec();
        break;
    default:
        break;
}
