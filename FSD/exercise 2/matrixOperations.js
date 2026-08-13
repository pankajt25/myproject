const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter 4 values for Matrix A (space separated): ", a => {
    rl.question("Enter 4 values for Matrix B (space separated): ", b => {

        let A = a.split(" ").map(Number);
        let B = b.split(" ").map(Number);

        console.log("Addition:");
        console.log(A[0] + B[0], A[1] + B[1]);
        console.log(A[2] + B[2], A[3] + B[3]);

        console.log("Multiplication:");
        console.log(A[0] * B[0] + A[1] * B[2], A[0] * B[1] + A[1] * B[3]);
        console.log(A[2] * B[0] + A[3] * B[2], A[2] * B[1] + A[3] * B[3]);

        rl.close();
    });
});