const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter text: ", text => {
    rl.question("Enter key: ", key => {
        key = Number(key);

        let encrypted = "";
        for (let ch of text)
            encrypted += String.fromCharCode(ch.charCodeAt(0) ^ key);

        let decrypted = "";
        for (let ch of encrypted)
            decrypted += String.fromCharCode(ch.charCodeAt(0) ^ key);

        console.log("Encrypted:", encrypted);
        console.log("Decrypted:", decrypted);

        rl.close();
    });
});