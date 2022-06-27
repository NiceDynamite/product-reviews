DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;
CREATE TABLE users (user_id SERIAL PRIMARY KEY, userName TEXT NOT NULL, pass TEXT NOT NULL, email Text);
CREATE TABLE reviews (review_id SERIAL PRIMARY KEY, user_id INT REFERENCES users(user_id) NOT NULL, review_date TEXT NOT NULL, title TEXT NOT NULL, review TEXT NOT NULL, recommend BOOLEAN NOT NULL, rating INT NOT NULL, verified-purchaser BOOLEAN NOT NULL);