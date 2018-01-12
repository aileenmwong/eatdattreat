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
  DEFAULT,
  null,
  'hello world',
  '1'
),
(
  'second post',
  DEFAULT,
  null,
  'hello world 2',
  '2'
),
(
  'third post',
  DEFAULT,
  null,
  'hello world 3',
  '1'
);
