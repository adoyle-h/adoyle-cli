'use strict';

module.exports = ({prog, cmdName, L}) => {
    prog.command(cmdName, 'Ask anything')
        .argument('[question]', 'Question with case insensitive. And it should be quoted with many words')
        .complete(() => ['what', 'what?'])
        .action((args, options, logger) => {
            let {question = ''} = args;
            const rawQuestion = question;
            question = question.toLowerCase();
            if (question.endsWith('?') || question.endsWith('？')) {
                question = question.slice(0, -1);
            }
            const answers = {
                'what is the answer to the ultimate question of life, the universe and everything': '42',
                'who are you': 'adoyle-cli, created by ADoyle <adoyle.h@gmail.com>',
                'time': () => (new Date()).toLocaleString(),
                'timestamp': () => Date.now(),
                '': 'Please enter your question.',
            };

            if ([
                'what', 'whats', 'wat', 'wtf',
                'what?', 'whats', 'wat?', 'wtf?',
            ].includes(question)) {
                delete answers[''];
                const questions = Object.keys(answers);
                logger.info(`Maybe you could ask me these questions:\n- '${questions.join('\'\n- \'')}'`);
                return;
            }

            let answer = answers[question];
            if (answer) {
                if (typeof answer === 'function') answer = answer();
                logger.info(`Q: ${rawQuestion}\nA: ${answer}`);
            } else {
                answer = `https://www.google.com/search?q=${question}`;
                logger.info(`Q: ${rawQuestion}\nA: ${answer}`);
                L.open(answer, {wait: false});
            }
        });
};
