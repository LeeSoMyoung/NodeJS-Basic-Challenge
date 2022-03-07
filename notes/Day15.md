# 객체지향 프로그래밍의 5원칙
객체지향 프로그래밍의 5원칙을 SOLID라고 한다.

1. Single Responsibility Principle

하나의 클래스는 하나의 책임 만을 가져야 한다.

2. Open-Close Principle

확장에는 열려있되, 변경에는 닫혀있어야 한다.

3. Liskov Substitution Principle

프로그램의 객체는 프로그램의 정확성을 깨트리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 한다.

4. Interface Segregation Principle

특정 클라이언트를 위한 인터페이스 여러 개가 하나의 범용 인터페이스보다 낫다

5. Dependency Inversion Principle

추상화에 의존한다. 구체화에 의존하면 안 된다.

# 객체지향 프로그래밍의 4가지 원칙
## 1. 캡슐화
* 실제로 구현 부분을 외부에 드러내지 않도록 한다.
* 변수와 메소드를 하나로 묶는다.
* 데이터를 외부에서 직접 접근하지 않고 함수를 통해서만 접근한다.

```
    var Person = function(arg) {
        var name = arg ? arg : "junyoung";
        
        this.getName = function() {
            return name;
        }
        this.setName = function(arg) {
            name = arg;
        }
    };

    var me = new Person();
    console.log(me.getName());
    me.setName("junyoung han");
    console.log(me.getName());
    console.log(me.name); // undefined
```
me라는 변수는 new라는 키워드로 호출하여 리턴 받았으므로 외부에서 접근이 불가능하다.

## 2. 상속
* 자식 클래스가 부모 클래스의 특성과 기능을 물려 받은 것
* 기능의 일부분을 변경하는 경우 자식 클래스에서 상속받아 수정 및 사용한다.
* 상속은 캡슐화의 유지 및 클래스의 재사용이 용이하도록 해준다.

## 3. 추상화
* 인터페이스로 클래스의 공통적인 특성(변수, 메소드)들을 묶어 표현한다.

## 4. 다형성
* 어떤 변수/메소드가 상황에 따라 다른 결과를 낸다.

1. 오버로딩(Overloading)
**하나의 클래스**에서 메소드의 이름은 같지만 파라미터가 다른 것을 말한다.

2. 오버라이딩(Overriding)
부모 클래스의 메소드를 자식 클래스의 용도에 맞게 재정의 하여 **코드의 재사용성을 증가**시킨다.  
