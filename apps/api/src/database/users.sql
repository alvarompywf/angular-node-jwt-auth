CREATE TABLE users (
    userId INT NOT NULL AUTO_INCREMENT,
    surname varchar(255),
    name varchar(255) NOT NULL,
    email varchar(255),
    numberPhone varchar(255),
    password varchar(255),
    PRIMARY KEY (userId)
);

INSERT INTO
    mena.users (
        `userId`,
        `surname`,
        `name`,
        `email`,
        `numberPhone`,
        `password`
    )
VALUES
    (
        1,
        'Mena Parra',
        'Álvaro',
        'alvaromenaparra@gmail.com',
        '+34 603 82 86 88',
        '467dda769ee4997fffe7ba0452fa5c61'
    );