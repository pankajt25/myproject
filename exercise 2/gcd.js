const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter first number: ", a => {
    rl.question("Enter second number: ", b => {
        a = Number(a);
        b = Number(b);

        while (b) [a, b] = [b, a % b];

        console.log("GCD =", a);
        rl.close();
    });
});