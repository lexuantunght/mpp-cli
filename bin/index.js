#! /usr/bin/env node
const { exec } = require('child_process');
const argv = require('optimist').argv;
const buildCmd = require('./build');
const devCmd = require('./dev');
const langCmd = require('./lang');
const helpCmd = require('./help');

const command = argv[0] || 'build';

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
    case 'help':
        helpCmd.exec();
        break;
    default:
        break;
}
