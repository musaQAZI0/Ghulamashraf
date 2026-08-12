# GhulamAshraf.com — Next.js Backend Setup Guide

## Recommended Architecture

Use **one Next.js codebase** for both frontend and backend.

```text
Next.js
├── Public Website
├── Admin Dashboard
├── Backend API
├── Authentication
└── MySQL Database
```

You do **not** need a separate Express backend for the initial version.

## Recommended Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Custom CSS
- Motion
- Prisma ORM
- MySQL
- Hostinger Node.js Hosting
- Custom Admin Dashboard

## 1. Create the Next.js Project

If the current folder is empty and you want to create the project there:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --turbopack --import-alias "@/*" --use-npm
```

Then install Motion:

```bash
npm install motion
```

## 2. Install Backend / Database Packages

```bash
npm install @prisma/client
npm install -D prisma
npx prisma init --datasource-provider mysql
```

This creates:

```text
prisma/
└── schema.prisma

.env
```

## 3. Recommended Project Structure

```text
ghulamashraf-website/
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── articles/
│   ├── education/
│   ├── politics/
│   ├── technology/
│   ├── islam/
│   ├── media/
│   ├── travel/
│   ├── general/
│   ├── contact/
│   ├── admin/
│   │   ├── page.tsx
│   │   ├── articles/
│   │   ├── categories/
│   │   ├── media/
│   │   ├── pages/
│   │   ├── users/
│   │   └── settings/
│   └── api/
│       ├── articles/
│       │   └── route.ts
│       ├── categories/
│       │   └── route.ts
│       ├── media/
│       │   └── route.ts
│       └── auth/
│           ├── login/
│           │   └── route.ts
│           └── logout/
│               └── route.ts
├── components/
├── lib/
│   ├── db.ts
│   ├── auth.ts
│   ├── permissions.ts
│   └── validations.ts
├── prisma/
│   └── schema.prisma
├── public/
├── .env
├── package.json
└── next.config.ts
```

## 4. MySQL Environment Variable

After creating the MySQL database on Hostinger, add the connection string to `.env`:

```env
DATABASE_URL="mysql://USERNAME:PASSWORD@HOST:3306/DATABASE_NAME"
```

Important:

- Never commit `.env` to GitHub.
- Never hard-code production passwords in source files.
- Use Hostinger Environment Variables in production.

## 5. Initial Prisma Schema

Example `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  role      String   @default("EDITOR")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Article {
  id             Int       @id @default(autoincrement())
  title          String
  slug           String    @unique
  excerpt        String?   @db.Text
  content        String    @db.LongText
  featuredImage  String?
  status         String    @default("DRAFT")
  seoTitle       String?
  seoDescription String?   @db.Text
  publishedAt    DateTime?
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt

  categoryId Int?
  category   Category? @relation(fields: [categoryId], references: [id])
}

model Category {
  id       Int       @id @default(autoincrement())
  name     String
  slug     String    @unique
  articles Article[]
}

model Media {
  id        Int      @id @default(autoincrement())
  fileName  String
  url       String
  type      String?
  createdAt DateTime @default(now())
}

model SiteSetting {
  id    Int    @id @default(autoincrement())
  key   String @unique
  value String @db.Text
}
```

## 6. Create the Database Tables

After setting `DATABASE_URL`:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

## 7. Prisma Connection File

Create `lib/db.ts`:

```ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
```

## 8. Backend API with Route Handlers

Create `app/api/articles/route.ts`:

```ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const articles = await prisma.article.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(articles);
}

export async function POST(request: Request) {
  const body = await request.json();

  const article = await prisma.article.create({
    data: {
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      status: body.status ?? "DRAFT",
    },
  });

  return NextResponse.json(article);
}
```

This provides:

```text
GET  /api/articles
POST /api/articles
```

## 9. Recommended API Routes

```text
GET    /api/articles
POST   /api/articles
GET    /api/articles/[id]
PATCH  /api/articles/[id]
DELETE /api/articles/[id]

GET    /api/categories
POST   /api/categories

POST   /api/media

POST   /api/auth/login
POST   /api/auth/logout
```

## 10. Server Actions

For internal admin forms, Server Actions can be used.

```ts
"use server";

import { prisma } from "@/lib/db";

export async function createArticle(formData: FormData) {
  const title = formData.get("title") as string;

  await prisma.article.create({
    data: {
      title,
      slug: title.toLowerCase().replaceAll(" ", "-"),
      content: "",
    },
  });
}
```

Recommended approach:

- Use **Server Actions** for internal admin forms where convenient.
- Use **Route Handlers** for APIs, uploads, external requests and separated backend endpoints.

## 11. Admin Dashboard

Recommended admin URL:

```text
ghulamashraf.com/admin
```

Modules:

```text
Dashboard

Articles
├── New Article
├── Published
├── Drafts
└── All Articles

Categories
Media
Pages
SEO
Users
Settings
Audit Logs
```

## 12. Authentication and Roles

Protect:

```text
/admin
/admin/articles
/admin/users
/admin/settings
```

Roles:

```text
ADMIN
EDITOR
AUTHOR
```

### Administrator

- Full access
- User management
- Site settings
- Publish/delete articles
- Media management
- SEO settings

### Editor

- Create/edit/publish articles
- Manage categories
- Manage media

### Author

- Create own drafts
- Edit own drafts
- No system/user settings

## 13. Security Requirements

- Password hashing
- Secure HTTP-only cookies
- Server-side authorization
- Role-based permissions
- Login rate limiting
- Input validation
- File upload validation
- MIME type validation
- File size limits
- Safe generated filenames
- Secure environment variables
- HTTPS
- CSRF protection where appropriate
- Audit logs
- Session expiry
- Optional 2FA for administrators

Never rely only on hiding admin buttons in the frontend. Every sensitive backend action must verify permissions on the server.

## 14. Media Uploads

Admin should be able to upload:

- Featured images
- Article images
- Profile photos
- Gallery images

Validate:

- File extension
- MIME type
- Maximum size
- Allowed image formats

Recommended formats:

```text
JPEG
PNG
WEBP
AVIF
```

Do not allow executable files.

## 15. Hostinger Architecture

```text
                    HOSTINGER
                        │
                 ghulamashraf.com
                        │
                     Next.js
          ┌─────────────┴─────────────┐
          │                           │
     Public Website              Admin Panel
          │                        /admin
          │                           │
          └─────────────┬─────────────┘
                        │
                 Next.js Backend
          Route Handlers / Actions
                        │
                      Prisma
                        │
                Hostinger MySQL
```

## 16. Keep Frontend and Backend Together

Do not create separate projects initially:

```text
frontend/
backend/
```

Use one project:

```text
one-nextjs-project/
```

This simplifies development, authentication, deployment, database access and maintenance.

## 17. Recommended Development Order

1. Next.js base project
2. Prisma installation
3. Local/Hostinger MySQL connection
4. Database schema
5. Prisma connection
6. User model
7. Authentication
8. Authorization / roles
9. Admin layout
10. Article CRUD
11. Category CRUD
12. Rich-text article editor
13. Media uploads
14. Page management
15. SEO management
16. Site settings
17. Audit logs
18. Validation and security
19. WordPress content migration
20. Hostinger production deployment

## 18. Commands Summary

```bash
npm install motion
npm install @prisma/client
npm install -D prisma
npx prisma init --datasource-provider mysql
```

After configuring the database:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Run locally:

```bash
npm run dev
```

## Final Backend Direction

**Next.js + TypeScript + Prisma + MySQL + Custom Admin Dashboard + Hostinger**

Keep the public website and backend inside the same Next.js project unless future requirements genuinely justify separating them.
