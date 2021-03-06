DROP DATABASE eatdattreat_blog;
CREATE DATABASE eatdattreat_blog;

CREATE TABLE IF NOT EXISTS tags (
  id BIGSERIAL PRIMARY KEY,
  subject VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS posts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  tagline VARCHAR(1000),
  author VARCHAR(255),
  created_at VARCHAR(255),
  image VARCHAR(1000),
  thumbnail VARCHAR(1000),
  content1 VARCHAR(20000),
  content2 VARCHAR(20000),
  quote VARCHAR(20000),
  link VARCHAR(20000),
  tag INTEGER REFERENCES tags(id)
);

-- CREATE TABLE IF NOT EXISTS posts (
--   id BIGSERIAL PRIMARY KEY,
--   name VARCHAR(255),
--   created_at TIMESTAMP DEFAULT current_timestamp,
--   image VARCHAR (255),
--   content VARCHAR(20000),
--   tag INTEGER REFERENCES tags(id)
-- );


