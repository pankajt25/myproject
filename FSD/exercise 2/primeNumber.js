const readline = require("readline");

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(question) {
    return new Promise(resolve => rl.question(question, answer => resolve(answer.trim())));
}

async function main() {
    console.log("Choose an option:");
    console.log("1. Find prime numbers in a range");
    console.log("2. Check a single number");

    const optionInput = await ask("Enter 1 or 2: ");
    const option = Number(optionInput);

    if (option === 1) {
        const startInput = await ask("Enter the start number: ");
        const endInput = await ask("Enter the end number: ");

        const start = Number(startInput);
        const end = Number(endInput);

        if (!Number.isInteger(start) || !Number.isInteger(end)) {
            console.log("Please enter valid integer values.");
            rl.close();
            return;
        }

        if (start > end) {
            console.log("Start must be less than or equal to end.");
            rl.close();
            return;
        }

        const primes = [];
        for (let n = start; n <= end; n++) {
            if (isPrime(n)) primes.push(n);
        }

        console.log(`Prime numbers from ${start} to ${end}:`);
        console.log(primes.length ? primes.join(" ") : "No prime numbers found in this range.");
    } else if (option === 2) {
        const numberInput = await ask("Enter the number to check: ");
        const number = Number(numberInput);

        if (!Number.isInteger(number)) {
            console.log("Please enter a valid integer.");
            rl.close();
            return;
        }

        console.log(`${number} is ${isPrime(number) ? "a prime number" : "not a prime number"}.`);
    } else {
        console.log("Invalid option. Please enter 1 or 2.");
    }

    rl.close();
}

main();