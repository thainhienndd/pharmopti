import type { Prisma } from "@prisma/client";
import type { userSelector } from "../selectors/user.selectors";

export type User = Prisma.UserGetPayload<{ select: typeof userSelector }>;
