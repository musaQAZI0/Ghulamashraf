# Supabase setup

The application uses Prisma with PostgreSQL. Supabase Auth and its JavaScript SDK are not used; existing application sessions remain in Prisma tables.

1. In Supabase, open Connect and copy the Session pooler URI on port 5432. This supports IPv4 hosting. Replace the password placeholder with the URL-encoded database password.
2. Add the URI as DATABASE_URL in Hostinger's server environment. Never use a NEXT_PUBLIC_ prefix for database credentials. Use TLS (sslmode=require).
3. Run `npx prisma migrate deploy` with DATABASE_URL set in the shell environment to create the application tables. DIRECT_URL can optionally override the CLI connection. Do not run migrate reset on a populated database.
4. Restart/redeploy the application to load its environment variables.

Builds only generate Prisma Client; they do not connect to the database or apply migrations. Initialization must be run explicitly after credentials are configured.

The initial migration enables row-level security on application tables so Supabase's public Data API cannot expose users, password hashes, sessions, or unpublished content. Prisma should connect using the database owner credentials from Connect; application authorization is enforced by the server.

Existing MySQL data is not transferred by this migration. Use this initial migration for a new Supabase database. Admin provisioning and media object storage remain separate setup tasks.
