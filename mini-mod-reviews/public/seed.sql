DELETE FROM users;
DELETE FROM reviews;
INSERT INTO users (userName,pass,email) VALUES ('user1','password','someemail1@email.com');
INSERT INTO users (userName,pass,email) VALUES ('user2','wordpass','someemail2@email.com');
INSERT INTO users (userName,pass,email) VALUES ('user3','asd123','someemail3@email.com');
INSERT INTO users (userName,pass,email) VALUES ('user4','123asd','someemail4@email.com');recommend, rating, verified-purchaser
INSERT INTO blogs (user_id,review_date,title,review, recommend, rating, verified-purchaser) VALUES (1,'02-12-2022','someTitle1','this is some review 1',TRUE,TRUE);
INSERT INTO blogs (user_id,review_date,title,review, recommend, rating, verified-purchaser) VALUES (2,'03-12-2022','someTitle2','this is some review 2',TRUE,TRUE);
INSERT INTO blogs (user_id,review_date,title,review, recommend, rating, verified-purchaser) VALUES (3,'04-12-2022','someTitle3','this is some review 3',FALSE,FALSE);
INSERT INTO blogs (user_id,review_date,title,review, recommend, rating, verified-purchaser) VALUES (4,'05-12-2022','someTitle4','this is some review 4',FALSE,FALSE);