const check = (n)=>{
    let sum = n;
    const str = n.toString();
    const len = str.length;
    
    for(let i=0;i<len;++i){
        sum+=Number(str[i]);
    }
    
    return sum;
}

let chk = [];

const N = 10000;

for(let i=0;i<=N;++i){
    chk.push(false);
}

for(let i=1;i<=N;++i){
    const num = parseInt(check(i).toString());
    if(num<=N){
        chk[num]=true;
    }
}

for(let i=1;i<=N;++i){
    if(!chk[i]){
        console.log(i);
    }
}