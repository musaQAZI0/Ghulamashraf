-- Run this in the Supabase SQL Editor for the production database.
-- It creates the article categories used by the website navigation.

insert into "Category" ("name", "slug", "createdAt", "updatedAt")
values
  ('AI', 'ai', now(), now()),
  ('Education', 'education', now(), now()),
  ('Islamic Economics', 'islamic-economics', now(), now()),
  ('Science Innovations', 'science-innovations', now(), now())
on conflict ("slug") do update
set
  "name" = excluded."name",
  "updatedAt" = now();
