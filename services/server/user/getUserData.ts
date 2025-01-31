"use server";

import prisma from "@/lib/prisma";
import { userSelector } from "../selectors/user.selectors";

export async function getUserData(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: userSelector,
  });

  return user;
}
