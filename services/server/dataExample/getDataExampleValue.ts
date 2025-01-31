"use server";

import prisma from "@/lib/prisma";
import { dataExampleSelector } from "../selectors/dataExample.selectors";

export async function getDataExampleValue(dataExampleId: string | undefined) {
  const dataExample = await prisma.dataExample.findUnique({
    where: {
      id: dataExampleId,
    },
    select: dataExampleSelector,
  });

  return dataExample?.value;
}
