'use strict';

const Path = require('path');
const FS = require('fs');
const prog = require('caporal');
const packageJSON = require('../package.json');
const L = require('./lazy.js');
const config = require('./config');

const filenames = FS.readdirSync(Path.join(__dirname, 'commands')).map((str) => str.slice(0, -3));
filenames.forEach((filename) => require(`./commands/${filename}`)({
    prog, L, config,
    cmdName: filename,
}));

prog.version(packageJSON.version)
    .parse(process.argv);
