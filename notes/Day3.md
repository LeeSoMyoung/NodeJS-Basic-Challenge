# Javascript의 Data Type
## 1. Number
ECMAScript에서는 Number와 BigInt 두 가지 타입이 있다.

Number 타입은 -(2^53-1)부터 (2^53-1)까지의 수이다. 또한, Number 타입은 부동소수점 외에도 **+Infinity, -Infinity, NaN(Not a Number)**의 값을 가진다.

보통 앞에 +나 - 부호를 붙여 양/음수를 구분하지만 유일하게 0은 +0 === -0이다.

하지만, 3/+0 === +Infinity이고, 3/-0 === -Infinity인 것에 유의해야한다.

* BigInt 타입
BitInt는 Number의 범위 이상으로 값을 저장할 수 있다.
BigInt는 숫자 뒤에 n을 붙이는 걸로 구분한다.
(ex) const bigIntX = 1n; (1이 BigInt 타입으로 저장된다.)

## 2. String
텍스트 데이터를 나타낼 때 사용한다.

이때 **String의 값은 불변**값이다. 따라서 변경이 필요하면 **문자열을 복사하여 새로운 문자열을 형성**해야한다. 그리고, **문자열을 타입화**할 수 있다.

(ex) const x = "123"이면 x는 String 형이다. 하지만, 이것을 Number 형으로 바꾸고 싶다면, const y = Number(x)로 하면 된다. 그러면 y에 숫자화된 x의 값이 들어온다.

## 3. Undefined
원시값 중 하나로, **변수에 값이 할당되지 않았을 때** 사용된다.

(ex) const x;
     console.log(x); // 출력 결과: undefined

## 4. Boolean
참/거짓으로 나타낼 수 있는 원시값 타입이다.

## 5. null(NULL)
null은 리터럴로서, **식별되지 않은 표현**을 뜻한다. 

null은 **API에서 객체가 존재하지 않을 때 그 객체 대신 사용**한다.

### * 참고 : undefined와 null의 차이
typeof undefined // undefined
typeof null // object
null은 object로 출력되는 것에서 undefined와 차이 난다.
