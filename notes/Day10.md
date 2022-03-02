자바스크립트는 **동기적(Synchronous)** 언어이다.

즉, 호이스팅된 이후 코드 한 줄 한 줄 순차적으로 실행된다는 뜻이다.

# 호이스팅(Hoisting)
var과 같은 변수 선언이나 function과 같은 함수를 선언할 시, 자동으로 해당 스코프 제일 위로 올라가는 것을 **Hoisting**이라고 한다.

자바스크립트 엔진은 **코드를 실행하기 전**에 실행 가능한 코드를 형상화하고 구분하는 과정(=== 실행 컨텍스트를 위한 과정)을 거친다. 이 과정에서 자바스크립트는 호이스팅을 통해 **모든 선언을 스코프에 등록**한다. 즉, **선언이 먼저 메모리에 저장**된다는 뜻이다.

# 콜백함수(call-back function)
함수는 파라미터로 여러 인자를 받을 수 있다. 함수 역시 다른 함수의 파라미터가 될 수 있다. 이때, **다른 함수의 파라미터가 되는 함수를 콜백함수**라고 한다.

이러한 콜백 함수도 일반 함수처럼 (1) 동기적 콜백함수 (2) 비동기적 콜백함수 두 가지로 실행시킬 수 있다.

## 콜백지옥

콜백 함수가 과도하게 중첩되는 것을 콜백지옥이라고 한다.

이때, 콜백 함수는 비동기적 콜백함수와 동기적 콜백함수가 섞여 중첩되면 의도한대로 실행결과가 나오지 않는다는 단점이 발생한다.

이러한 콜백 지옥을 해결하기 위해서는 **Promise**가 많이 사용된다.

# Promise

Promise는 Javascript에서 제공하는 **비동기(Asynchronous)를 간편하게 처리할 수 있도록 도와주는 오브젝트**이다.

Promise는 정해진 장시간의 작업을 시행한 후, **정상적으로 처리되었다면 성공 메시지와 처리 결과값을 전달해주고, 예상치 못한 문제가 발생한다면 에러를 전달**한다. 이러한 Promise는 콜백 함수 대신 비동기 처리에 유용하게 사용된다.

Promise의 상태는 pending, fulfilled, rejected로 총 3가지 상태가 있다.

1. pending
지정한 작업을 수행하고 있는 상태를 pending이라고 한다.

2. fulfilled
지정한 작업을 성공적으로 완료되었으면 fulfilled가 된다.

3. rejected
지정한 작업에 실패했으면 rejected 상태가 된다.

## Promise의 Producer

**Promise는 class**이므로 new라는 키워드를 통해 생성 가능하다.

Promise는 2개의 콜백함수를 인자로 받는다. 성공적으로 완료했을 때(state가 fulfilled 됐을 때) 실행할 resolve 함수와 실패했을 때(state가 rejected가 되었을 때) 실행할 reject 함수 2개를 받는다.

```
    const promise = new Promise((resolve, reject)=>{
        // doing something heavy work
    });

```

promise는 큰 데이터를 불러오는 등의 일을 하므로 **시간이 걸리는 일들은 비동기적으로 실행시킬 때는 Promise를 사용**한다. 

**새로운 Promise가 만들어질때, 새로운 executor 함수가 자동으로 실행**된다.

## Promise의 Consumer

.then, .catch, .finally라는 키워드들을 통해 가져올 수 있다. 

```
    promise.then((data)=>{
        // promise가 정상적으로 실행
        // promise의 결과값으로 원하는 작업 시행
    })
    .catch((err)=>{
        throw err;
    })
    .finally(()=>{
        // 성공하든 실패하든 실행되는 코드
    });
```

## Promise chaining

여러 개의 Promise가 중첩되어 있을때의 경우이다.

# async & await
