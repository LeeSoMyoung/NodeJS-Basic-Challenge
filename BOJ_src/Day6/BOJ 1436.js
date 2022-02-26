const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdcout
});

rl.on('line', (line) => {
    const n = Number(line);
    let ans = 665, cnt = 0;
    while (cnt < n) {
        ++ans;
        if (ans.toString().includes('666')) {
            ++cnt;
        }
    }
    console.log(`${ans}`);
    rl.close();
}).on("close", () => {
    process.exit()
});