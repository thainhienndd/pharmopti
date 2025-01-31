"use server";

import prisma from "@/lib/prisma";
import { dataExampleSelector } from "../selectors/dataExample.selectors";

export async function setDataExampleValue(value: string) {
  const dataExample = await prisma.dataExample.create({
    data: {
      value,
    },
    select: dataExampleSelector,
  });

  return dataExample.id;
}
