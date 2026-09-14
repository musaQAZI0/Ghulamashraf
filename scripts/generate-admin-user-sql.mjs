import { randomBytes, scryptSync } from "node:crypto";

const [, , name, email, password] = process.argv;

if (!name || !email || !password) {
  console.error('Usage: node scripts/generate-admin-user-sql.mjs "Admin Name" "admin@example.com" "your-password"');
  process.exit(1);
}

function hashPassword(value) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(value, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function sqlString(value) {
  return value.replaceAll("'", "''");
}

const passwordHash = hashPassword(password);

console.log(`insert into "User" ("name", "email", "passwordHash", "role", "createdAt", "updatedAt")
values ('${sqlString(name)}', '${sqlString(email.toLowerCase())}', '${passwordHash}', 'ADMIN', now(), now())
on conflict ("email") do update
set
  "name" = excluded."name",
  "passwordHash" = excluded."passwordHash",
  "role" = 'ADMIN',
  "updatedAt" = now();`);
