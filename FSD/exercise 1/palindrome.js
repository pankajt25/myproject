/*
let s="madam";
console.log(s==s.split("").reverse().join("")?"Palindrome":"Not Palindrome");
*/
//user input palindrome


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a string: ", function(s) {
    console.log(s == s.split("").reverse().join("") ? "Palindrome" : "Not Palindrome");
    rl.close();
});
