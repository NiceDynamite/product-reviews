DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;
CREATE TABLE users (user_id INT PRIMARY KEY, userName TEXT NOT NULL, pass TEXT NOT NULL, email Text);
CREATE TABLE reviews (review_id SERIAL PRIMARY KEY, user_id INT REFERENCES users(user_id) NOT NULL, review_date TEXT NOT NULL, title TEXT NOT NULL, review TEXT NOT NULL, recommend BOOLEAN, rating INT NOT NULL, verified_purchaser BOOLEAN NOT NULL);