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

const doExec = (script) => {
    exec(script, (e, out, err) => {
        console.error(e);
        console.log(out);
        console.error(err);
    });
}

switch (command) {
    case 'build':
        doExec(buildCmd.script);
        break;
    case 'dev':
        doExec(devCmd.script);
        break;
    case 'lang':
        doExec(langCmd.script);
        break;
    case 'icon':
        doExec(iconCmd.script);
        break;
    case 'help':
        helpCmd.exec();
        break;
    default:
        break;
}
