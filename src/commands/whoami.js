'use strict';

module.exports = ({prog, cmdName, L}) => {
    prog.command(cmdName, 'Print who am I')
        .action(() => {
            L.sh.exec('whoami');
        });
};
