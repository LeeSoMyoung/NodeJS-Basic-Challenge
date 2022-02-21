const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdcout
});

rl.on('line',(line)=>{
    const n = Number(line);
    const ans = [];
    for(let i=1;i<=n;++i)
        ans.push(2*i);
    console.log(ans.join(' '));
    rl.close();
}).on("close",()=>{
    process.exit()
});