# SQL(Structured Query Language)

Structured : 관계형 데이터베이스는 **표 형식**으로 정보를 정리 정돈한다. 이런 형식으로 정리하는 것을 **구조화 되었다**고 한다.

Query : 무엇인가를 **요청**한다는 뜻이다.

Language : 데이터베이스도 이해할 수 있고, 사용자도 이해할 수 있는 언어로 요청해야 한다.

SQL는 관계형 데이터베이스 카테고리에 속하는 제품들이 전부 같은 언어를 사용한다.

* row(행)

데이터가 저장된 것으로, 표에서 가로 줄을 뜻한다. **record**라고도 부르는데, 뜻 그대로 한 개의 데이터를 뜻한다.

* column(열)

데이터의 타입을 일컫는 말로, 표의 세로 줄에 해당한다.

# MySQL 테이블의 생성

```
    CREATE TABLE 테이블명(
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        created DATETIME NOT NULL,
        author VARCHAR(15) NULL,
        PRIMARY KEY(id)
    );
```

CREATE 키워드에 TABLE을 붙여 테이블을 생성한다. 그리고 생성할 속성들과 특징들을 적어준다.

# MySQL의 CRUD

CRUD : **Create Read** Update Delete

INSERT SELECT UPDATE DELETE라는 키워드를 이용하여 CRUD를 각각 구현한다.