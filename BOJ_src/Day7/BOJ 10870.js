const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdcout
});

const ans = (num) => {
    if (num <= 1) {
        return num;
    }
    else {
        return ans(num - 1) + ans(num - 2);
    }
}

rl.on('line', (line) => {
    const n = Number(line);
    console.log(`${ans(n)}`);
    rl.close();
}).on("close", () => {
    process.exit()
});