'use strict';

module.exports = ({prog, cmdName, L}) => {
    const whats = {
        blog() {
            L.open('http://adoyle.me/blog', {wait: false});
        },
        github() {
            L.open('https://github.com/adoyle-h', {wait: false});
        },
    };

    prog.command(cmdName, 'Fast open frequently used things')
        .argument('<what>', 'To open what?', Object.keys(whats))
        .complete(() => Object.keys(whats))
        .action((args, options, logger) => {
            whats[args.what]({args, options, logger});
        });
};
