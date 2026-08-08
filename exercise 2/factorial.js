const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) fact *= i;
    return fact;
}

rl.question("Enter a number: ", n => {
    console.log("Factorial =", factorial(Number(n)));
    rl.close();
});