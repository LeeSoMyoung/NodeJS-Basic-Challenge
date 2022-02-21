const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdcout
});

rl.on('line',(line)=>{
    const n = Number(line);
    for(let i=1;i<=9;++i){
        console.log(`${n} * ${i} = ${n*i}`);
    }
    rl.close();
}).on("close",()=>{
    process.exit()
});