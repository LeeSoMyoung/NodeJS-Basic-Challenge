const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdcout
});

const MOD = 15746;

rl.on('line',(line)=>{
    const n = Number(line);
    const dp=[];
    dp.push(0);
    dp.push(1);
    dp.push(2);
    for(let i=3;i<=n;++i){
        const val = (dp[i-1]+dp[i-2])%MOD;
        dp.push(val);
    }
    console.log(`${dp[n]}`);
    rl.close();
}).on("close",()=>{
    process.exit()
});