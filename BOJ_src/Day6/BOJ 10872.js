const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdcout
});

const factorial = (n) => {
    if (n <= 1) return 1;
    else return factorial(n - 1) * n;
}

rl.on('line', (line) => {
    const n = Number(line);
    console.log(`${factorial(n)}`);
    rl.close();
}).on("close", () => {
    process.exit()
});