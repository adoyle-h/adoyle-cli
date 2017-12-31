'use strict';

const JSON5 = require('json5');
const FS = require('fs');
const rcFile = `${process.env.HOME}/.adoyle-cli.rc`;
let config = {};
try {
    const content = FS.readFileSync(rcFile, {encoding: 'utf8'});
    config = JSON5.parse(content);
} catch(ignoreErr) {
    // ignore
}
module.exports = config;
