# Javascript의 반복문
반복문은 다음의 요소들을 가진다.

1. 카운터(couter)

어떠한 값으로 초기화 된다. 주로 반복문의 시작점과 끝점을 알려준다.

2. 조건(condition)

조건(condition)은 반복문이 계속 실행될지 혹은 멈출지를 결정하는 true/false 구문이다.

주로 조건을 제어하는 인자로 1번의 카운터를 많이 사용한다.

3. 반복자(iterator)

iterator는 조건(condition)이 true가 아닐때까지 카운터를 증가시키는 역할을 한다.

## 반복문의 표준
```
for (초기화식; 종료 조건; 증감식) {
  // 실행할 코드
}
```

위 코드는 반복문의 표준이다.

* 괄호가 뒤따라오는 키워드 for.
괄호 안에는 세미콜론으로 구분되는 세개의 항목이 있다.

1. 초기화식(initializer)

이것은 보통 숫자로 설정된 변수인데, 반복문이 실행될 횟수(count)까지 증가하거나 감소한다. 이니셜라이저는 카운터 변수(counter variable)라고도 불린다다.

2. 조건식(condition)

위에서 나왔던 내용처럼 조건식은 언제 반복문이 반복을 멈춰야만 하는지를 정의한다. 

이것은 일반적으로 비교 연산자(comparison operator)를 특징으로 하는 표현식(expression)인데, 이는 종료 조건이 충족되었는지를 확인하는 작업을 한다.

3. 증감식(final-expression)

이것은 반복문이 전체 반복을 거쳤을 때마다 항상 실행된다. 

이것은 보통 카운터 변수를 증가/감소시킴으로써, 조건이 더 이상 true가 아닌 지점에 가까워지게 한다.

코드 블럭을 감싸는 중괄호 — 이 코드는 반복문이 반복될 때마다 실행된다.

## break

break 키워드를 만나면 해당 반복문을 종료하고 탈출한다.

## continue

continue 키워드를 만나면 반복문의 해당 차례는 더이상 실행하지 않고 다음 차례로 넘어간다.

# 조건문

## if-else if-else문
```
if (조건) {
  만약 조건(condition)이 참일 경우 실행할 코드
} 
else if(조건2){
    만약 조건2가 참일 경우 실행할 경우
}
else {
  대신 실행할 다른 코드
}
```

if-else문은 다음과 같은 양상을 나타낸다.

if 안의 조건문이 true라면 if문의 코드 블럭이 실행되고,

if 안의 조건문이 false이고 else if절의 조건문이 true이면 else if문의 코드 블럭이 실행되는 형태이다.

if-else if-else문은 다른 프로그래밍 언어에서도 널리 사용되는 형태이고, 자바스크립트에서도 이런 형태를 조건문으로 채택하고 있다. 

## switch 문
```
    switch (expression) {
    case choice1:
        run this code
        break;

    case choice2:
        run this code instead
        break;
    
    // case 문의 조건은 여러가지일 수 있다.

    default:
        actually, just run this code
    }
```

체크할 표현식을 switch 문에 넣어주고 해당 표현식이 어떠한 조건인지

case 문을 통해 체크된다.