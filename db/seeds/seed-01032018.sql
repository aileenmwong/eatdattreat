INSERT INTO tags (subject) VALUES
(
  'recipe'
),
(
  'treat'
);


INSERT INTO posts (name, tagline, author, created_at, image, thumbnail, content, tag) VALUES
(
  'first post',
  'this is my first tagline',
  'Aileen Wong',
  '1/12/18',
  'http://lrfs7g12er-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/bloodorangelo_2003-2-680x900.jpg',
  'http://lrfs7g12er-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/bloodorangelo2_2064.jpg',
  'hello world',
  '1'
),
(
  'second post',
  'this is my second tagline',
  'Aileen Wong',
  '1/12/18',
  'http://lrfs7g12er-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/appleblueberrylo_0888-3-680x900.jpg',
  'http://lrfs7g12er-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/appleblueberrylo_0830-2.jpg',
  'hello world 2',
  '2'
),
(
  'third post',
  'this is my third tagline',
  'Aileen Wong',
  '1/12/18',
  'http://lrfs7g12er-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/brownielo_9448-1.jpg',
  'http://lrfs7g12er-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/gingerlo_8993.jpg',
  'hello world 3',
  '1'
),
(
  'fourth post',
  'this is my fourth tagline',
  'Aileen Wong',
  '1/12/18',
  'http://lrfs7g12er-flywheel.netdna-ssl.com/wp-content/uploads/2017/11/lussekatterlo3_7379.jpg',
  'http://lrfs7g12er-flywheel.netdna-ssl.com/wp-content/uploads/2017/11/lusselo_7342.jpg',
  'hello world 4',
  '2'
);

-- INSERT INTO posts (name, created_at, image, content, tag) VALUES
-- (
--   'first post',
--   DEFAULT,
--   null,
--   'hello world',
--   '1'
-- ),
-- (
--   'second post',
--   DEFAULT,
--   null,
--   'hello world 2',
--   '2'
-- ),
-- (
--   'third post',
--   DEFAULT,
--   null,
--   'hello world 3',
--   '1'
-- );
