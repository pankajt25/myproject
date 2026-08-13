const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", str => {
    let result = "";

    for (let ch of str)
        if (!result.includes(ch))
            result += ch;

    console.log("Result:", result);
    rl.close();
});