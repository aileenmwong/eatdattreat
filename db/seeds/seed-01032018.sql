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
  'image link',
  'thumbnail link',
  'hello world',
  '1'
),
(
  'second post',
  'this is my second tagline',
  'Aileen Wong',
  '1/12/18',
  'image link',
  'thumbnail link',
  'hello world 2',
  '2'
),
(
  'third post',
  'this is my third tagline',
  'Aileen Wong',
  '1/12/18',
  'image link',
  'thumbnail link',
  'hello world 3',
  '1'
),
(
  'fourth post',
  'this is my fourth tagline',
  'Aileen Wong',
  '1/12/18',
  'image link',
  'thumbnail link',
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
