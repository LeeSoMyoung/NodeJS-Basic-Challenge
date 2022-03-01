# 동기(Synchronous)/비동기(Asynchronous)

1. 동기(Synchronous)

어떤 일이 끝날 때까지 다른 일을 하지 않는다. 하나의 일이 끝났으면 다음 일로 넘어간다.

2. 비동기(Asynchronous)

어떤 일이 끝날 때까지 시간이 걸린다면 그 시간 동안 다른 일을 한다.

즉, **병렬적**으로 일을 처리하는 것을 뜻한다.

✔ 효율적이지만 복잡하다.

## 예시

다음과 같은 코드가 있다고 생각해보자.

```
    'use strict';

    const fs = require('fs');

    const DEFAULT_VALUE = "txt default value";

    let txt = DEFAULT_VALUE;

    txt = fs.readFileSync('src/Day9/hello.txt', 'utf8');

    console.log(txt);

    txt = DEFAULT_VALUE;

    fs.readFile('src/Day9/hello.txt', 'utf-8', (err, data) => {
        txt = data;
    });

    console.log(txt);
```

위와 같은 코드의 실행 결과 값은 어떻게 될까?

```
this is a hello.txt file
txt default value
```
위와 같은 결과를 얻을 수 있다.

두 코드 모두 파일을 읽는 코드이고, txt라는 변수에 그 데이터를 담도록 하였다.

하지만 차이가 생기는 이유가 무엇일까?

바로 **Sync** 때문이다. readFileSync는 **파일을 읽어들이는 작업할 동안은 다른 작업을 하지 않는다.** 하지만, readFile은 파일을 읽어들이는 동안 다른 작업을 한다. 즉, 동기화 작업이냐 비동기화 작업이냐에 따라 출력 결과가 달라진다.

즉, readFile은 비동기 작업으로 readFile이 실행되는 동안 다른 작업을 수행하고 readFileSync는 동기 작업으로 readFile이 실행되는 동안 다른 작업을 하지 못한다.