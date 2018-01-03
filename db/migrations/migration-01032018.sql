DROP DATABASE eatdattreat_blog;
CREATE DATABASE eatdattreat_blog;

CREATE TABLE IF NOT EXISTS posts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT current_timestamp,
  image VARCHAR (255),
  content VARCHAR(255)
);
