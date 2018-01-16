INSERT INTO tags (subject) VALUES
(
  'recipe'
),
(
  'treat'
);


INSERT INTO posts (name, created_at, image, content, tag) VALUES
(
  'first post',
  '1/12/18',
  null,
  'hello world',
  '1'
),
(
  'second post',
  '1/12/18',
  null,
  'hello world 2',
  '2'
),
(
  'third post',
  '1/12/18',
  null,
  'hello world 3',
  '1'
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
