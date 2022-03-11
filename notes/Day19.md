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