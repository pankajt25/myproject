const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter numbers separated by space: ", input => {
    let arr = input.split(" ").map(Number);

    for (let i = 0; i < arr.length - 1; i++)
        for (let j = 0; j < arr.length - i - 1; j++)
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

    console.log("Sorted:", arr);
    rl.close();
});