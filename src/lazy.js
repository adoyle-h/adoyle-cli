'use strict';

// Thanks to https://stackoverflow.com/a/2970667/4622308
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
        if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

const L = {};
const pkgs = [
    ['opn', 'open'],
    ['shelljs', 'sh'],
];

pkgs.forEach((name) => {
    let alias, pkg;
    if (Array.isArray(name)) {
        pkg = name[0];
        alias = name[1];
    } else {
        pkg = name;
        alias = camelize(name);
    }

    Object.defineProperty(L, alias, {
        get() {return require(pkg);},
    });
});

module.exports = L;
