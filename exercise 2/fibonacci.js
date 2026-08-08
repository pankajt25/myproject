const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

function fib(n) {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

rl.question("Enter number of terms: ", n => {
    for (let i = 0; i < n; i++)
        process.stdout.write(fib(i) + " ");
    rl.close();
});