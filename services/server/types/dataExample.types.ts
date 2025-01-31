import type { Prisma } from "@prisma/client";
import type { dataExampleSelector } from "../selectors/dataExample.selectors";

export type DataExample = Prisma.DataExampleGetPayload<{
  select: typeof dataExampleSelector;
}>;
