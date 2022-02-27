const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdcout
});

const ans = (num)=>{
    if(num<100){
        return num;
    }
    
    let first, second, third;
    let res = 99;
    const maximum = Math.min(999,num);
    for(let i=100;i<=maximum;++i){
                
        const str__i = i.toString();
        
        first = Number(str__i[2]);
        second = Number(str__i[1]);
        third = Number(str__i[0]);
        
        if(first+third===2*second){
            ++res;
        }
    }
        
    return res;
}

rl.on('line', (line) => {
    const n = Number(line);
    console.log(`${ans(n)}`);
    rl.close();
}).on("close", () => {
    process.exit()
});