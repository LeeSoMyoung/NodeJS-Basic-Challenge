const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdcout
});

rl.on('line',(line)=>{
    const n = Number(line);
    if((n&1)===1){
        console.log(0);
    }
    else{
        const dp=[1,0,3];
        for(let i=4;i<=n;i+=2){
            dp.push(0);
            let val = dp[i-2]*3;
            for(let j=4;j<=i;j+=2) val += dp[i - j] * 2;
            dp.push(val);
        }
        console.log(`${dp[n]}`);
    }
    rl.close();
}).on("close",()=>{
    process.exit()
});