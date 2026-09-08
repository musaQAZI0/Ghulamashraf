import type { Role } from "@prisma/client";
import { HttpError } from "@/lib/http";

const permissionMap: Record<Role, string[]> = {
  ADMIN: ["admin:read", "article:write", "article:publish", "article:delete", "category:write", "media:write", "user:manage", "settings:write"],
  EDITOR: ["admin:read", "article:write", "article:publish", "category:write", "media:write"],
  AUTHOR: ["admin:read", "article:write"],
};

export function can(role: Role, permission: string) {
  return permissionMap[role].includes(permission);
}

export function assertPermission(role: Role | undefined, permission: string) {
  if (!role || !can(role, permission)) {
    throw new HttpError("Forbidden", 403);
  }
}
