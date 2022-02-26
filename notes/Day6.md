# 객체 (Object)

객체는 **관련된 데이터와 함수**의 집합이다.

예시로 이해하는것이 빠르니 밑의 객체를 한 번 보자.

```
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};

```

위의 person이라는 객체는 이름, 나이, 성별, 바이오 등 여러 가지 항목들이 있다.

각각의 항목들은 배열, 함수, 원시 자료형 등 다양하다. 이러한 항목들을 **속성(Property)**라고 한다.

## 점 표기법

우리는 객체의 속성에 접근할 때 **점**을 이용하여 접근한다.

위의 예시 객체를 보자.

```
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};

```

위 객체에서 age라는 property에 점표기법을 이용하여 접근하려면 어떻게 해야할까?

```
    console.log(person.age);
```
위와 같이 **객체.속성**이라는 간단한 표기로 객체의 속성들에 접근할 수 있다.

## 괄호 표기법

괄호 표기법은 대괄호 안에 프로퍼티를 입력함으로써 접근하는 방식이다.

점 표기법의 예시의 age라는 속성에 접근하는 법은 간단하다.

```
    console.log(person['age']);
```

위와 같이 **객체['접근할 속성명']**과 같이 접근하면 된다.

## this

C언어를 공부하면서 많이 봤던 키워드인 this이다.

this는 자바스크립트에서 **현재 작동하고 있는 코드를 가지고 있는 객체**를 가리킨다.

this라는 키워드는 객체 멤버의 컨텍스트가 바뀌는 경우에도 정확한 값을 사용하게 해준다.