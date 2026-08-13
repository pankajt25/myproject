const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", str => {
    let count = {};

    for (let ch of str)
        count[ch] = (count[ch] || 0) + 1;

    console.log(count);
    rl.close();
});