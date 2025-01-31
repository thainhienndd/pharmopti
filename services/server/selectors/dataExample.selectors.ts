import type { Prisma } from "@prisma/client";

export const dataExampleSelector = {
  id: true,
  createdAt: true,
  updatedAt: true,
  value: true,
} satisfies Prisma.DataExampleSelect;