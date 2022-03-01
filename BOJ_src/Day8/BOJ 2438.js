const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdcout
});

const printStar = (cnt, n) => {

    for (let i = 0; i < cnt; ++i) {
        process.stdout.write('*');
    }

    console.log('');

    if (cnt === n) {
        return;
    }

    printStar(cnt + 1, n);

}

rl.on('line', (line) => {
    const n = Number(line);
    printStar(1, n);
    rl.close();
}).on("close", () => {
    process.exit()
});		