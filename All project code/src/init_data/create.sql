DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    email VARCHAR(50) PRIMARY KEY,
    password VARCHAR(60) NOT NULL
);

DROP TABLE IF EXISTS reviews CASCADE;
CREATE TABLE reviews(
    review_id SERIAL PRIMARY KEY NOT NULL,
    review VARCHAR(200),
    rating DECIMAL NOT NULL,
    isbn DECIMAL NOT NULL,
    email VARCHAR(50) NOT NULL,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100) NOT NULL,
    upload_date DATE NOT NULL,
    FOREIGN KEY (email) REFERENCES users (email)
);