# SQL(Structured Query Language)

Structured : 관계형 데이터베이스는 **표 형식**으로 정보를 정리 정돈한다. 이런 형식으로 정리하는 것을 **구조화 되었다**고 한다.

Query : 무엇인가를 **요청**한다는 뜻이다.

Language : 데이터베이스도 이해할 수 있고, 사용자도 이해할 수 있는 언어로 요청해야 한다.

SQL는 관계형 데이터베이스 카테고리에 속하는 제품들이 전부 같은 언어를 사용한다.

* row(행)

데이터가 저장된 것으로, 표에서 가로 줄을 뜻한다. **record**라고도 부르는데, 뜻 그대로 한 개의 데이터를 뜻한다.

* column(열)

데이터의 타입을 일컫는 말로, 표의 세로 줄에 해당한다.

* CRUD (Create, Read, Update, Delete) : 데이터베이스의 종류를 막론하고 반드시 가지고 있는 작업.

**Create, Read**가 가장 중요한 기능들 중 하나이다.

# CREATE 기능: INSERT

```
    INSERT INTO 테이블명 (column1, colum2, colum3, ...)
    VALUES (value1, value2, value3, ...);
```

INSERT 구문의 문법은 위와 같다. 만약 USERS라는 테이블에 id, pw, nickname이라는 컬럼이 있다고 생각해보자. 그리고 유저가 회원가입을 하여 이 정보들을 데이터베이스에 해당 레코드를 삽입해야한다. 그렇게 되면 밑과 같이 된다.

```
    INSERT INTO users (id, pw, nickname)
    VALUES (myID, myPW, myNICKNAME);
```

위와 같이 **INSERT 구문을 통해 데이터베이스의 CREATE 기능을 구현**할 수 있다.

## READ 기능: SELECT

```
    SELECT 조회할 컬럼(모든 컬럼을 조회하고 싶으면 *을 사용한다.) FROM 테이블명
    WHERE 조건절
    ORDER BY 어떤 것을 기준으로 정렬할지 DESC;
```

SELECT는 데이터를 읽어들이는 기능을 한다. 즉, READ 기능을 하는 것이다. 그리고 뒤에 WHERE이라는 키워드 뒤에는 테이블에서 찾을 조건을 넣는다. 그리고 데이터를 정렬해서 조회를 하고 싶다면 ORDER BY문을 넣는다. 만약 유저가 비밀번호를 까먹어서 비밀번호를 찾아야할 때가 올 수도 있을 것이다. 그럴땐 어떻게 구현을 해야할까?

```
    SELECT pw FROM USERS WHERE id = 유저아이디;
```

유저 정보 중 하나인 패스워드를 찾는 것이므로 USERS 테이블에서 찾아야 한다. 그리고, (1) 어떤 아이디에 대한 (2)패스워드를 찾아야하므로 (1)은 조건절에서 비밀번호를 찾고자하는 유저의 아이디를 집어넣고, (2)은 '비밀번호'를 찾아야하므로 pw를 집어넣어야 한다.

그리고 게시판에서 게시글 번호대로 게시물들을 불러오고 싶다면 어떻게 해야할까? 게시물 번호대로 정렬을 하여 불러와야할 것이다.

```
    SELECT * FROM POSTS
    ORDER BY pid DESC;
```

게시물 번호인 pid대로 정렬하도록 ORDER BY 구문을 넣으면 된다.

# UPDATE 기능 : UPDATE

데이터베이스에 있는 레코드를 변경해야할 때 UPDATE를 사용한다.

```
    UPDATE 테이블명
    SET 컬럼1=변경할 값1, 컬럼2=변경할 값2, 컬럼3=변경할 값3, ...
    WHERE 조건절(어떤 구문을 바꿔야할지);
```

만약 어떤 사용자가 작성했던 게시물을 변경한다고 해보자. 그러면 해당 게시물의 고유번호로 업데이트할 게시물을 찾아서 값을 변경한다. 그럼 밑과 같이 된다.

```
    UPDATE POSTS
    SET title='수정', contents='수정되었습니다.'
    WHERE pid = 변경할 게시물의 고유 값;
```

이때 중요한 것은 **WHERE절을 빠뜨리면 모든 레코드가 업데이트 되므로 절대절대 빠뜨리지 않아야 한다!!**

# DELETE 기능: DELETE

```
    DELETE FROM 테이블명
    WHERE 어떤 레코드를 삭제할지;
```

만약 사용자가 게시물을 삭제한다고 해보자. 그렇다면 게시물 고유번호를 찾아 삭제하면 된다.

```
    DELETE FROM POSTS
    WHERE pid = 삭제할 포스트 번호;
```

여기서 주의해야할 점은 *UPDATE와 같이 **WHERE절을 빠뜨리면 모든 레코드가 없어지게 되므로 절대절대 빠뜨리면 안된다!***

# 왜 관계형 데이터베이스가 필요한가?
데이터베이스에 중복된 데이터들이 있다면 **개선해야할 것이 있다**는 의미이다. 중복된 데이터는 여러가지 문제점을 야기한다. 이를테면, 복잡하고 대용량의 데이터가 중복해서 삽입되어 있으면 기술적/비용적으로 비효율을 야기한다.

이를 해결하려면 어떻게 해야할까? 바로 **테이블을 분리**하면 된다. 그렇게 되면 중복된 데이터에 대한 수정이나 삭제 작업이 용이하게 처리될 수 있기 때문이다. 그렇다면 이렇게 독립적으로 분리된 테이블을 읽을 때 하나의 테이블로 저장된 것처럼 작동하게 하려면 어떻게 할까? **JOIN**을 사용하면 된다.

# JOIN
테이블과 테이블을 JOIN을 하려면 결합을 해주는 매개가 있어야 한다.

```

    CREATE TABLE `topic` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(30) NOT NULL,
    `description` text,
    `created` datetime NOT NULL,
    `author_id` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
    );

    CREATE TABLE `author` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(20) NOT NULL,
    `profile` varchar(200) DEFAULT NULL,
    PRIMARY KEY (`id`)
    );

```

위와 같이 topic과 author라는 테이블이 있다고 하자. topic 테이블의 author_id는 저자의 id를 저장한다. author 테이블의 id라는 어트리뷰트를 저장하는 것이다. 즉, **author의 id를 매개로 테이블이 분리된 것이다.** 

위의 두 개의 테이블은 밑의 테이블을 2개로 쪼갠것이다. 

```
    CREATE TABLE `origin_topic` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `title` varchar(30) NOT NULL,
        `description` text,
        `created` datetime NOT NULL,
        `name` varchar(20) NOT NULL,
        `profile` varchar(200) DEFAULT NULL,
        PRIMARY KEY (`id`)
    );

```

즉 original_topic 테이블에서 name과 profile은 공통되고, 두 개의 어트리뷰트들이 수정되거나 삭제될 때 비효율적인 비용이 발생한다. 그래서 topic과 author라는 테이블을 분리한 것이다. 하지만, 분리된 두 개의 테이블을 original_topic처럼 사용하려면 어떻게 해야할까? 답은 **JOIN**이다.

```
    SELECT topic.id AS id, title, description, created, name, profile FROM topic LEFT JOIN ON topic.author_id = author.id;
```

위와 같이 두 개의 분리된 테이블을 JOIN하면 original_topic과 같은 형태가 된다.