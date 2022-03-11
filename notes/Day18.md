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