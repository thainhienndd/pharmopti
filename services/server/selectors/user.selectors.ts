import type { Prisma } from "@prisma/client";

export const userSelector = {
  id: true,
  name: true,
  email: true,
} satisfies Prisma.UserSelect;
