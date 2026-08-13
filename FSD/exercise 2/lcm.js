const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter first number: ", a => {
    rl.question("Enter second number: ", b => {
        let x = Number(a), y = Number(b);
        let m = x, n = y;

        while (n) [m, n] = [n, m % n];

        console.log("LCM =", (x * y) / m);
        rl.close();
    });
});
